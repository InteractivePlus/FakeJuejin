import React from "react";

import JuejinArticleListItem from "../components/juejinArticleListItem";

import JuejinCenterContainer from "../components/juejinCenterContainer";

import { useScrollBottom } from "../utils/scrollContext";

import { getCategories, getArticles } from "../api";

import { historyArticleStore } from "../store/historyArticleStore";

import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from "react-tabs";

import { isEmpty } from "../utils/commonutils";
import { waitUntil } from "../utils/timeUtils";
// import mobx from 'mobx'

import { observer } from "mobx-react";




// 两个自定义tab
const ArticleViewFirstTab = (props) => {
    const { isSelected, children } = props;
    return (
        <Tab>
            <div
                className={
                    "cursor-pointer md:pr-4 " +
                    (isSelected ? "text-juejin-focus-text-blue" : "text-gray-400")
                }>
                {children}
            </div>
        </Tab>
    );
};

const ArticleViewOtherTab = (props) => {
    const { isSelected, children } = props;
    return (
        <Tab>
            <div
                className={
                    "cursor-pointer md:px-4 " +
                    (isSelected
                        ? "text-juejin-focus-text-blue"
                        : "text-gray-400")
                }>
                {children}
            </div>
        </Tab>
    );
};

ArticleViewFirstTab.tabsRole = "Tab";
ArticleViewOtherTab.tabsRole = "Tab";

/*
 * 动态列表
 * @constructor
 * @param {function(Number):Promise<Object>} - 获取数据接口，传入偏移量。这是通用接口
 */
const DynamicList = observer((props) => {
    const { dataInterface, categoryStore } = props;
    const currentCategory = categoryStore.getCurrentCategory;
    
    let [listOffset, setListOffset] = React.useState(0);
    let [dynamicList, setDynamicList] = React.useState([]);
    const { isScrollToBottom } = useScrollBottom();


    // 如果滚到底部就调用接口更新数据
    React.useEffect(() => {
        if (isScrollToBottom) {
            waitUntil(500).then(
                () => {
                    dataInterface(currentCategory, listOffset).then(
                        (response) => {
                           // console.log(response.data);
                            setDynamicList(
                                dynamicList.concat(response.data["articles"])
                            );
                            setListOffset(listOffset + 10);
                        },
                        (err) => { }
                    )
                }
            )

        }
    }, [isScrollToBottom]);


    React.useEffect(() => {
        setDynamicList([]);
        dataInterface(currentCategory, listOffset).then(
            (response) => {
                // console.log(response.data);
                setDynamicList(response.data["articles"]);
                setListOffset(0);
            },
            (err) => {}
        );
    }, [currentCategory]);


    let handleItemClick = async (item) => {
        // console.log(item);
        historyArticleStore.add(item);
        // console.log(historyArticleStore.historyArticleList);
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
});

// 其实更应该叫ListTabView（？）
const JuejinArticleList = observer(({ categoryStore }) => {
    const [tabIndex, setTabIndex] = React.useState(0);

    let getHotArticlesInterface = (categoryId, listOffset) => {
        return new Promise((resolve, reject) => {
            getArticles(categoryId,  "hot", listOffset, 10).then(
                (response) => {
                    resolve(response);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    };

    let getNewArticlesInterface = (categoryId, listOffset) => {
        return new Promise((resolve, reject) => {
            getArticles(categoryId,  "new", listOffset, 10).then(
                (response) => {
                    resolve(response);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    };

    let getHistoryArticlesInterface = (categoryId, listOffset) => {
        return new Promise((resolve, reject) => {
            const list = historyArticleStore.getData();
            // console.log(list);

            if (list["data"]["articles"].length == 0) {
                console.log("rere");
                reject();
            } else {
                console.log("res");
                resolve(list);
            }
        });
    };

    return (
        <JuejinCenterContainer>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className="fixed bottom-0 md:sticky order-last md:order-first flex flex-1 py-4 px-6 border-b border-gray-200 w-full bg-white">
                        {/* <div className="hidden md:flex"> */}
                        <div className="flex flex-1 flex-row items-center justify-around md:justify-start md:divide-x divide-gray-300 text-sm z-10">
                            <ArticleViewFirstTab isSelected={tabIndex == 0}>
                                热门
                            </ArticleViewFirstTab>
                            <ArticleViewOtherTab isSelected={tabIndex == 1}>
                                最新
                            </ArticleViewOtherTab>
                            <ArticleViewOtherTab isSelected={tabIndex == 2}>
                                历史
                            </ArticleViewOtherTab>
                        </div>
                        {/* </div> */}
                        {/* <div className="flex md:hidden">
                            <div className="flex flex-1 flex-row items-center justify-around divide-gray-300 text-sm ">
                                <ArticleViewFirstTab>热门</ArticleViewFirstTab>
                                <ArticleViewOtherTab>最新</ArticleViewOtherTab>
                                <ArticleViewOtherTab>历史</ArticleViewOtherTab>
                            </div>
                        </div> */}
                    </div>
                </TabList>
                <div className="">
                    <TabPanel>
                        {/* 热门 */}
                        <ul className="order-first md:order-last flex flex-col leading-7 w-full">
                            {/* <JuejinArticleListItem
                        author="测试用户"
                        date="1626924865"
                        title="【小知识】测试标题测试标题测试标题测试标题"
                        contentAbstract="测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本"
                        coverImg="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
                    /> */}
                            <DynamicList
                                categoryStore={categoryStore}
                                dataInterface={getHotArticlesInterface}
                            />
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        {/* 最新 */}
                        <ul className="order-first md:order-last flex flex-col leading-7 w-full">
                            <DynamicList
                                categoryStore={categoryStore}
                                dataInterface={getNewArticlesInterface}
                            />
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        {/* 历史 */}
                        <ul className="order-first md:order-last flex flex-col leading-7 w-full">
                            <DynamicList
                                categoryStore={categoryStore}
                                dataInterface={getHistoryArticlesInterface}
                            />
                        </ul>
                    </TabPanel>
                </div>
            </Tabs>
        </JuejinCenterContainer>
    );
});

JuejinArticleList.getInitialProps = async (ctx) => {
    resetIdCounter();
};

export default JuejinArticleList;
