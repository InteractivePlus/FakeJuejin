import Head from "next/head";
import { Fragment, useRef, useState, useEffect } from 'react';


export default function Home() {


    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = useRef(null);

    useEffect(() => {
        if (!showDropdown) return;
        function handleClick(event) {
            (dropdown.current && !dropdown.current.contains(event.target)) && setShowDropdown(false)
            window.addEventListener("click", handleClick);
            return () => window.removeEventListener("click", handleClick);
        }
    }, [showDropdown]);

    const Menu = () => (
        <div className="overflow-y-auto absolute  top-px h-96 w-52 rounded-b-box bg-white text-juejinnav left-0">
            <ul className="flex flex-col">
                <li>
                    你爸
                </li>

            </ul>
        </div>

    )

    const Nav = () => (
        <div className="mb-4">
            <div className="sticky top-0  w-full mx-auto bg-white bg-opacity-100  flex-none">
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
                                        <img className="w-auto h-6 md:hidden" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg" ></img>
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
                                <div onClick={() => setShowDropdown(b => !b)} className="md:hidden flex items-center order-2 cursor-pointer text-juejinactive">
                                    {/* <button className="outline-none mobile-menu-button">
                                <svg
                                    className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button> */}

                                    <span>首页</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
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
    const JuejinList = () => (
        <div className="flex justify-center">
            <div className="flex bg-white max-w-4xl ">
                <ul className="flex-col inline-flex leading-7">
                    <li className="flex-1 px-6 pt-3">
                        <div className="flex flex-col border-b border-gray-200">
                            <div className="flex flex-row items-center divide-x divide-gray-300 text-sm ">
                                <div className="pr-4 text-gray-600">作者</div>
                                <div className="px-4 text-gray-400">日期</div>
                                <div className="px-4 text-gray-400">标签</div>
                            </div>
                            <div className="flex flex-row mt-1 pb-3">
                                <div className="flex flex-col">
                                    <div className="text-gray-800 mb-1">
                                        示例标题
                                    </div>
                                    <div className="text-gray-400 text-sm mb-4">
                                        示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本
                                        示例文本示例文本示例文本
                                    </div>

                                    <ul className="flex flex-row text-sm">
                                        <li className="flex flex-row mr-4">
                                            <p className="iconfont icon-browse text-gray-400"></p>
                                            <p className="ml-1 text-gray-600">
                                                1234
                                            </p>
                                        </li>
                                        <li className="flex flex-row mr-4">
                                            <p className="iconfont icon-good text-gray-400"></p>
                                            <p className="ml-1 text-gray-600">
                                                1234
                                            </p>
                                        </li>
                                        <li className="flex flex-row mr-4">
                                            <p className="iconfont icon-comments text-gray-400"></p>
                                            <p className="ml-1 text-gray-600">
                                                1234
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <img className="ml-6 h-20" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd2683efa3fa43deb13fb91c0cbd4b15~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
    return (
        <div className="overflow-hidden font-juejin">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <JuejinList />
        </div>
    );
}
