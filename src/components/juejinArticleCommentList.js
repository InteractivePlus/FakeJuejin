import React from "react";
import JuejinBasicListItem from "./JuejinBasicListItem";
import JuejinCenterContainer from "./juejinCenterContainer";

const JuejinArticleCommentItem = (props) => {
    const { children } = props;
    return (
        <div className="px-6">
            <div>热门评论</div>
            <ul className="flex flex-col leading-7 w-full">
                
            </ul>
        </div>
    );
};

export default JuejinArticleCommentItem;
