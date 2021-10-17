import Head from "next/head";
import Link from "next/link";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import { getTimeStampDesc } from "../utils/getTimeStampDesc";

import { getCategories, getArticles } from "../api";

const JuejinListItem = (props) => {
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
        commentCount,
    } = props;

    // const CoverImgWrapper = () => {
    //     return
    // }

    let handleItemClick = async () => {
        console.log(articleId);
    };

    return (
        <li
            className="flex-1 w-auto px-6 pt-3 cursor-pointer hover:bg-gray-50"
            onClick={handleItemClick}>
            <Link
                target="_blank"
                href={{
                    pathname: "/posts/[slug]",
                    query: { slug: articleId },
                }}>
                <a target="_blank">
                    <div className="flex flex-1 flex-col border-b border-gray-200 w-auto">
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
                                    className="ml-6 w-32"
                                    // src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
                                    src={coverImg}
                                />
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default function Home() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        if (!showDropdown) return;
        function handleClick(event) {
            dropdown.current &&
                !dropdown.current.contains(event.target) &&
                setShowDropdown(false);
            window.addEventListener("click", handleClick);
            return () => window.removeEventListener("click", handleClick);
        }
    }, [showDropdown]);

    const Menu = () => (
        <div className="overflow-y-auto absolute  top-px h-96 w-52 rounded-b-box bg-white text-juejinnav left-0">
            <ul className="flex flex-col">
                <li>你爸</li>
            </ul>
        </div>
    );

    const Nav = () => (
        <div className="sticky top-0 mb-4 bg-white flex-none z-50">
            <div className="w-full mx-auto">
                <nav>
                    <div className="mx-auto">
                        <div className="flex justify-between border-b border-gray-200 px-4">
                            <div className="flex space-x-7">
                                <div className="order-1">
                                    {/* <!-- Website Logo --> */}
                                    <a
                                        href="#"
                                        className="flex items-center py-4 px-2">
                                        <img
                                            className="w-auto h-6 md:block hidden"
                                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg"
                                        />
                                        <img
                                            className="w-auto h-6 md:hidden"
                                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
                                        />
                                    </a>
                                </div>
                                {/* <!-- Primary Navbar items --> */}
                                <div className="hidden md:flex items-center space-x-1 order-3">
                                    {/* <div className="flex-auto flex items-center ml-3"> */}
                                    <ul className="flex-grow flex text-juejinnav">
                                        <li className="flex-1 px-5">
                                            <a className="cursor-pointer">
                                                首页
                                            </a>
                                        </li>

                                        <li className="flex-1 px-5">
                                            <a className="cursor-pointer">
                                                暂无
                                            </a>
                                        </li>
                                    </ul>
                                    {/* </div> */}
                                </div>

                                {/* <!-- Mobile menu button --> */}
                                <div
                                    onClick={() => setShowDropdown((b) => !b)}
                                    className="md:hidden flex items-center order-2 cursor-pointer text-juejinactive">
                                    <span>首页</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    {showDropdown ? <Menu /> : null}
                                </div>
                            </div>

                            {/* <!-- Secondary Navbar items --> */}
                            <div className="flex items-center justify-center space-x-3">
                                <div className="rounded-full border-0 border-base-100 overflow-hidden w-10 h-10 ">
                                    <img
                                        className="w-full h-full"
                                        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex overflow-x-auto border-b border-gray-200">
                            <ul className="flex-row inline-flex text-juejinnav h-10 items-center pl-4">
                                <li className="flex-1 px-4">
                                    <a className="cursor-pointer">推荐</a>
                                </li>

                                <li className="flex-1 px-4">
                                    <a className="cursor-pointer">后端</a>
                                </li>
                                <li className="flex-1 px-4">
                                    <a className="cursor-pointer">前端</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- mobile menu --> */}
                    {/* <div className="hidden mobile-menu">
                        <ul className="">
                            <li className="active">
                                <a
                                    href="index.html"
                                    className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </nav>
            </div>
        </div>
    );
    const JuejinList = () => {
        useEffect(() => {
            // console.log(getCategories());
            // console.log(getArticles());
            // const allPosts = getArticles();
            // console.log(allPosts)
            getArticles().then(
                (response) => {
                    console.log(response.data);
                },
                (err) => {}
            );
        }, []);

        let DynamicItem = () => {
            let [dynamicList, setDynamicList] = React.useState([]);

            useEffect(() => {
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
                    <JuejinListItem
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
            <div className="flex justify-center mb-10 md:mb-0">
                <div className="flex flex-col max-w-3xl w-full">
                    <div className="fixed bottom-0 md:sticky order-last md:order-first flex flex-1 py-4 px-6 border-b border-gray-200 w-full bg-white">
                        <div className="flex flex-1 flex-row items-center justify-around md:justify-start md:divide-x divide-gray-300 text-sm ">
                            <div className="md:pr-4 text-gray-600">热门</div>
                            <div className="md:px-4 text-gray-400">最新</div>
                            <div className="md:px-4 text-gray-400">历史</div>
                        </div>
                    </div>
                    <ul className="order-first md:order-last flex flex-col leading-7 w-full bg-white">
                        {/* <JuejinListItem
                        author="yck"
                        date="1633923044"
                        title="近 20 人爆肝数周，写给初中级前端的万字高级进阶指南"
                        contentAbstract="🔥 这是什么？ 笔者在学会 JS 以及框架的应用后，有一段时间不知道该如何深入下去，活能干，就是不知道该学啥。相信这个问题也会有很多读者朋友遇到。 当然笔者目前已经突破了这个瓶颈，也成为了知名公司基础"
                        coverImg="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84f09255e03a473da6e38387c8dad825~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
                    />
                    <JuejinListItem
                        author="朋友圈的小可爱"
                        date="1626924865"
                        title="【小知识】Android APP测试方法汇总"
                        contentAbstract="前言 我们前期在Android 系统浅析中已经对 Android 统进行全面了解，所以在Android 系统我们通常接触到就是与用户交互层-应用层。 在Android 系统应用层在实际场景中表形式就是"
                        coverImg="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
                    />
                    <JuejinListItem
                        author="朋友圈的小可爱"
                        date="1626924865"
                        title="【小知识】Android APP测试方法汇总"
                        contentAbstract="前言 我们前期在Android 系统浅析中已经对 Androidaaaaaaaaaaaa"
                        coverImg="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp"
                    /> */}
                        <DynamicItem />
                    </ul>
                </div>
            </div>
        );
    };
    return (
        <div className="font-juejin">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <JuejinList />
        </div>
    );
}
