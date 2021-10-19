import { useRouter } from "next/router";
import ErrorPage from "next/error";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import JuejinArticleContentItem from "../../components/juejinArticleContent";
import JuejinArticleCommentItem from "../../components/juejinArticleCommentList";
import JuejinCenterContainer from "../../components/juejinCenterContainer";

import { isEmpty } from "../../utils/commonutils";
import { getArticles, getArticleById } from "../../api";


export default function Post(props) {
    const router = useRouter();
    const { articleid } = router.query;
    // let [content, setContent] = React.useState('');
    // let [authorInfo, setAuthorInfo] = React.useState("");
    let [articleFullInfo, setArticleFullInfo] = React.useState("");
    // console.log(articleid);

    useEffect(() => {
        if (!isEmpty(articleid)) {
            getArticleById(articleid).then(
                (response) => {
                    console.log(response.data);
                    // setContent(response.data["article"]["article_content"]);
                    // setAuthorInfo(response.data["author_user_info"]);
                    setArticleFullInfo(response.data);
                },
                (err) => {}
            );
        }
    }, [articleid]);

    return (
        <div>
            <JuejinCenterContainer>
                {isEmpty(articleFullInfo) ? (
                    <div></div>
                ) : (
                    <ul>
                        <JuejinArticleContentItem
                            articleFullInfo={articleFullInfo}
                        />
                        <JuejinArticleCommentItem></JuejinArticleCommentItem>
                    </ul>
                )}
            </JuejinCenterContainer>
        </div>
    );
}
