import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import JuejinBasicListItem from "./JuejinBasicListItem";
import JuejinCenterContainer from "./juejinCenterContainer";
import JuejinArticleCommentBlock from "./juejinArticleCommentMainBlock";
import JuejinArticleCommentReplyContainer from "./juejinArticleCommentReplyBlock";
import JuejinArticleCommentReplyBlock from "./juejinArticleCommentReply";
import { useScrollBottom } from "../utils/scrollContext";

/*
const DynamicCommentList = (props) => {
    const { dataInterface } = props;

    let [dynamicList, setDynamicList] = React.useState([]);
    let [listOffset, setListOffset] = React.useState(0);

    const { isScrollToBottom } = useScrollBottom();

    React.useEffect(() => {
        console.log(dataInterface(listOffset));
        dataInterface(listOffset).then(
            (response) => {
                console.log(response.data);
                setDynamicList(dynamicList.concat(response.data["articles"]));
                setListOffset(listOffset + 10);
            },
            (err) => {}
        );
    }, []);

    // 如果滚到底部就调用接口更新数据
    React.useEffect(() => {
        if (isScrollToBottom) {
            dataInterface(listOffset).then(
                (response) => {
                    console.log(response.data);
                    setDynamicList(
                        dynamicList.concat(response.data["articles"])
                    );
                    setListOffset(listOffset + 10);
                },
                (err) => {}
            );
        }
    }, [isScrollToBottom]);

    let handleItemClick = async (item) => {
        console.log(item);
        historyArticleStore.add(item);
        console.log(historyArticleStore.historyArticleList);
    };

    return dynamicList.map((item) => {
        return (
            <JuejinArticleListItem
                key={item["article_id"]}
                articleId={item["article_id"]}
                author={item["author_user_info"]["user_name"]}
                date={item["article_info"]["ctime"]}
                title={item["article_info"]["title"]}
                contentAbstract={item["article_info"]["brief_content"]}
                coverImg={item["article_info"]["cover_image"]}
                viewCount={item["article_info"]["view_count"]}
                diggCount={item["article_info"]["digg_count"]}
                commentCount={item["article_info"]["comment_count"]}
                onClick={() => {
                    handleItemClick(item);
                }}
            />
        );
    });
};
*/
const JuejinArticleCommentItem = (props) => {
    const { children } = props;

    const { isScrollToBottom } = useScrollBottom();

    React.useEffect(() => {
        if (isScrollToBottom) {


            
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
            <div className="mt-5">
                <JuejinArticleCommentBlock
                    authorName="我是你爸"
                    authorJob="二营长"
                    avatarSrc="https://avatars.githubusercontent.com/u/22854837?v=4"
                    content="儿啊，你快回来吧，父亲知错了dasdasdasdsadasd32r23d32d23d3d3qd3d23qd23d2d23qd23dq32dq3dw3d2d323qd23dq23ddawedw3dewd3dewewfedwedwedwedwed"
                    like="999+"
                    commentCount="999+"
                    commentTime="114514小时前"
                >
                    <JuejinArticleCommentReplyContainer>
                        <JuejinArticleCommentReplyBlock
                            authorName="我是你爸"
                            avatarSrc="https://avatars.githubusercontent.com/u/22854837?v=4"
                            content="儿啊，你快回来吧，父亲知错了dasdasdasdsadasd32r23d32d23d3d3qd3d23qd23d2d23qd23dq32dq3dw3d2d323qd23dq23ddawedw3dewd3dewewfedwedwedwedwed"
                            like="999+"
                            commentCount="999+"
                            commentTime="114514小时前"
                        >
                        </JuejinArticleCommentReplyBlock>
                    </JuejinArticleCommentReplyContainer>
                </JuejinArticleCommentBlock>
            </div>
        </div>
    );
};

export default JuejinArticleCommentItem;
