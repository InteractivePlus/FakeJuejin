import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import JuejinBasicListItem from "./JuejinBasicListItem";
import JuejinCenterContainer from "./juejinCenterContainer";
import JuejinArticleCommentBlock from "./juejinArticleCommentMainBlock";
import JuejinArticleCommentReplyContainer from "./juejinArticleCommentReplyBlock";
import JuejinArticleCommentReplyBlock from "./juejinArticleCommentReply";
import { useScrollBottom } from "../utils/scrollContext";
import { getCommentsByArticleId } from "../api";
import { getTimeStampDesc } from "../utils/timeUtils";

import { waitUntil } from "../utils/timeUtils";

const DynamicCommentList = (props) => {
    let [listOffset, setListOffset] = React.useState(0);

    const { dataInterface } = props;
    let [dynamicList, setDynamicList] = React.useState([]);
    let [replyList, setReplyList] = React.useState([]);
    const { isScrollToBottom } = useScrollBottom();

    React.useEffect(() => {
        dataInterface(listOffset).then(
            (response) => {
                // console.log(response.data);
                setDynamicList(dynamicList.concat(response.data["comments"]));

                setListOffset(listOffset + 10);
            },
            (err) => {}
        );
    }, []);

    // 如果滚到底部就调用接口更新数据
    React.useEffect(() => {
        if (isScrollToBottom) {
            waitUntil(500).then(() => {
                dataInterface(listOffset).then(
                    (response) => {
                        // console.log(response.data);
                        setDynamicList(
                            dynamicList.concat(response.data["comments"])
                        );
                        setListOffset(listOffset + 10);
                    },
                    (err) => {}
                );
            });
        }
    }, [isScrollToBottom]);

    return dynamicList.map((item) => {
        return (
            <JuejinArticleCommentBlock
                key={item["comment_id"]}
                authorName={item["user_info"]["user_name"]}
                avatarSrc={item["user_info"]["avatar_large"]}
                content={item["comment_info"]["comment_content"]}
                authorJob={item["user_info"]["job_title"]}
                commentTime={getTimeStampDesc(item["comment_info"]["ctime"])}
                commentCount={item["comment_info"]["reply_count"]}
                like={item["comment_info"]["digg_count"]}>
                {item["reply_infos"] ? (
                    <JuejinArticleCommentReplyContainer>
                        {item["reply_infos"].map((reply, index) => {
                            return (
                                <JuejinArticleCommentReplyBlock
                                    key={reply["reply_id"]}
                                    authorName={reply["user_info"]["user_name"]}
                                    avatarSrc={
                                        reply["user_info"]["avatar_large"]
                                    }
                                    content={
                                        reply["reply_info"]["reply_content"]
                                    }
                                    commentTime={getTimeStampDesc(
                                        reply["reply_info"]["ctime"]
                                    )}
                                    commentCount="评论"
                                    isLastOne={
                                        index == item["reply_infos"].length - 1
                                    }
                                    like={
                                        reply["reply_info"]["digg_count"]
                                    }></JuejinArticleCommentReplyBlock>
                            );
                        })}
                    </JuejinArticleCommentReplyContainer>
                ) : (
                    <></>
                )}
            </JuejinArticleCommentBlock>
        );
    });
};

const JuejinArticleCommentItem = (props) => {
    const { children, articleId } = props;

    const { isScrollToBottom } = useScrollBottom();

    let getHotCommentInterface = (listOffset) => {
        // console.log('aaaaid',articleId)
        return new Promise((resolve, reject) => {
            getCommentsByArticleId(articleId, listOffset).then(
                (response) => {
                    resolve(response);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    };

    let getNewCommentInterface = (articleId, listOffset) => {
        return new Promise((resolve, reject) => {
            getCommentsByArticleId(articleId, listOffset, "new").then(
                (response) => {
                    resolve(response);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    };

    React.useEffect(() => {
        if (isScrollToBottom) {
            // console.log(getCommentsByArticleId(articleId, 10));
        }
    }, [isScrollToBottom]);

    return (
        <div className="px-6 py-8">
            <div className="flex items-center">
                热门评论
                <div className="px-1 flex-none">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.8 5.2C13.9532 6.46 14.8 8.2 14.8 10C14.7039 12.8937 12.6843 15.1706 9.97973 15.8159C10.359 12.3442 7.77588 9.35406 7.77588 9.35406C7.77588 9.35406 7.99512 13.7064 6.79514 15.8104C4.03715 15.1428 2 12.7806 2 9.8C2 7.776 2.9336 5.9728 4.4 4.8C5.8608 3.7056 6.8 1.9656 6.8 0C9.684 0.4368 11.894 2.9264 11.894 5.932C11.894 6.5012 11.746 7.0652 11.6 7.6C12.1264 6.9024 12.6184 6.0876 12.8 5.2Z"
                            fill="#F53F3F"></path>
                    </svg>
                </div>
            </div>
            <div className="mt-5" style={{flex: '0 0 100%'}}>
                <DynamicCommentList
                    dataInterface={getHotCommentInterface}></DynamicCommentList>
            </div>
        </div>
    );
};

export default JuejinArticleCommentItem;
