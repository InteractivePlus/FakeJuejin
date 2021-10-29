import { useRouter } from "next/router";
import ErrorPage from "next/error";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import Nav from "../../components/juejinNav";
import JuejinArticleContentItem from "../../components/juejinArticleContent";
import JuejinArticleCommentItem from "../../components/juejinArticleCommentList";
import JuejinCenterContainer from "../../components/juejinCenterContainer";

import { isEmpty } from "../../utils/commonutils";
import { getArticles, getArticleById } from "../../api";

import { categoryStore } from "../../store/categoryStore";

export default function Post(props) {
    const router = useRouter();
    const { articleid } = router.query;
    let [articleFullInfo, setArticleFullInfo] = React.useState("");
    // console.log(articleid);

    useEffect(() => {
        if (!isEmpty(articleid)) {
            getArticleById(articleid).then(
                (response) => {
                    console.log(response.data);
                    setArticleFullInfo(response.data);
                },
                (err) => {}
            );
        }
    }, [articleid]);

    return (
        <div className="font-juejin">
            <Nav categoryStore={categoryStore} />
            <JuejinCenterContainer>
                {isEmpty(articleFullInfo) ? (
                    <div></div>
                ) : (
                    <div className="flex flex-col">
                        <JuejinArticleContentItem
                            articleFullInfo={articleFullInfo}
                        />
                        <JuejinArticleCommentItem
                            articleId={articleid}></JuejinArticleCommentItem>
                    </div>
                )}
            </JuejinCenterContainer>
        </div>
    );
}
