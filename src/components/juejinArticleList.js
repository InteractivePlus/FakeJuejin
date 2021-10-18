import React from "react";

import JuejinArticleListItem from "../components/juejinArticleListItem";

import JuejinCenterContainer from "../components/juejinCenterContainer";

import { getCategories, getArticles } from "../api";

const JuejinArticleList = () => {
    React.useEffect(() => {
        // console.log(getCategories());
        // console.log(getArticles());
        getArticles().then(
            (response) => {
                console.log(response.data);
            },
            (err) => {}
        );
    }, []);

    let DynamicItem = () => {
        let [dynamicList, setDynamicList] = React.useState([]);

        React.useEffect(() => {
            getArticles().then(
                (response) => {
                    console.log(response.data);
                    setDynamicList(response.data["articles"]);
                },
                (err) => {}
            );
        }, []);

        return dynamicList.map((item) => {
            console.log(item);
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
                />
            );
        });
    };

    return (
        <div>
            <JuejinCenterContainer>
                <div className="fixed bottom-0 md:sticky order-last md:order-first flex flex-1 py-4 px-6 border-b border-gray-200 w-full ">
                    <div className="flex flex-1 flex-row items-center justify-around md:justify-start md:divide-x divide-gray-300 text-sm ">
                        <div className="md:pr-4 text-gray-600">热门</div>
                        <div className="md:px-4 text-gray-400">最新</div>
                        <div className="md:px-4 text-gray-400">历史</div>
                    </div>
                </div>
                <ul className="order-first md:order-last flex flex-col leading-7 w-full">
                    {/* <JuejinArticleListItem
                        author="测试用户"
                        date="1626924865"
                        title="【小知识】测试标题测试标题测试标题测试标题"
                        contentAbstract="测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本"
                        coverImg="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
                    /> */}
                    <DynamicItem />
                </ul>
            </JuejinCenterContainer>
        </div>
    );
};

export default JuejinArticleList;
