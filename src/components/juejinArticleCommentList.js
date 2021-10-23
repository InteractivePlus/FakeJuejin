import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import JuejinBasicListItem from "./JuejinBasicListItem";
import JuejinCenterContainer from "./juejinCenterContainer";
import JuejinArticleCommentMainBlock from "./juejinArticleCommentMainBlock";

const JuejinArticleCommentItem = (props) => {
    const { children } = props;


    useEffect(() => {
        window.onscroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                //拉到底的Hooks
            }
        };
    }, []);

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
            <JuejinArticleCommentMainBlock
                authorName="我是你爸"
                avatarSrc="https://avatars.githubusercontent.com/u/22854837?v=4"
                content="儿啊，你快回来吧，父亲知错了"
                like="999+"
                commentCount="999+">
                saasasas
            </JuejinArticleCommentMainBlock>
        </div>
    );
};

export default JuejinArticleCommentItem;
