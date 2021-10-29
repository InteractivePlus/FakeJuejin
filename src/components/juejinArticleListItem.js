import Link from "next/link";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import JuejinBasicListItem from "../components/JuejinBasicListItem";

import { getTimeStampDesc } from "../utils/timeUtils";

const JuejinArticleListItem = (props) => {
    const {
        articleId,
        author,
        date,
        label,
        title,
        contentAbstract,
        coverImg,
        viewCount,
        diggCount,
        commentCount
    } = props;

    const { onClick } = props;

    // const CoverImgWrapper = () => {
    //     return
    // }

    // let handleItemClick = async () => {
    //     console.log(articleId);
    // };


  

return (
    <Link
        target="_blank"
        href={{
            pathname: "/posts/[articleid]",
            query: { articleid: articleId },
        }}>
        <a
            className="cursor-pointer hover:bg-gray-50"
            target="_blank"
            onClick={onClick}>
            <JuejinBasicListItem>
                <div className="flex flex-1 flex-row items-center divide-x divide-gray-300 text-sm ">
                    <div className="pr-4 text-gray-600">{author}</div>
                    <div className="px-4 text-gray-400">
                        {getTimeStampDesc(date)}
                    </div>
                    <div className="px-4 text-gray-400">标签</div>
                </div>
                <div className="flex flex-1 flex-row mt-1 pb-3 items-center">
                    <div className="flex flex-1 overflow-hidden">
                        <div className="flex flex-1 flex-col w-full">
                            <div className="mb-1 text-gray-800 truncate">
                                {title}
                            </div>
                            <div className="mb-4 text-gray-400 text-sm truncate">
                                {contentAbstract}
                            </div>

                            <ul className="flex flex-row text-sm">
                                <li className="flex flex-row mr-4">
                                    <p className="iconfont icon-browse text-gray-400"></p>
                                    <p className="ml-0.5 text-gray-600">
                                        {viewCount}
                                    </p>
                                </li>
                                <li className="flex flex-row mr-4">
                                    <p className="iconfont icon-good text-gray-400"></p>
                                    <p className="ml-0.5 text-gray-600">
                                        {diggCount}
                                    </p>
                                </li>
                                <li className="flex flex-row mr-4">
                                    <p className="iconfont icon-comments text-gray-400"></p>
                                    <p className="ml-0.5 text-gray-600">
                                        {commentCount}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 三元运算快速修改样式 */}
                    <div
                        className={
                            "flex-initial " +
                            (coverImg == "" ? "hidden" : "")
                        }>
                        <img
                            className="ml-6"
                            style={{ width: "120px", height: "80px" }}
                            // src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
                            src={coverImg}
                        />
                    </div>
                </div>
            </JuejinBasicListItem>
        </a>
    </Link>


);
};

export default JuejinArticleListItem;
