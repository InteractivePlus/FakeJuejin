import Head from "next/head";

export default function Home() {
    const Nav = () => (
        <div>
            <div className="sticky top-0  w-full mx-auto bg-white border-b border-gray-200 flex-none">

                <nav class="bg-white">
                    <div class="max-w-6xl mx-auto px-4">
                        <div class="flex justify-between">
                            <div class="flex space-x-7">
                                <div>
                                    {/* <!-- Website Logo --> */}
                                    <a
                                        href="#"
                                        class="flex items-center py-4 px-2">
                                        <img
                                            className="w-auto h-6"
                                            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg"
                                        />
                                    </a>
                                </div>
                                {/* <!-- Primary Navbar items --> */}
                                <div class="hidden md:flex items-center space-x-1">
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
                            </div>
                            {/* <!-- Secondary Navbar items --> */}
                            <div class="hidden md:flex items-center space-x-3 ">
                                <div className="rounded-full border-0 border-base-100 overflow-hidden w-10 h-10 ">
                                    <img
                                        className="w-full h-full"
                                        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                                    />
                                </div>
                            </div>
                            {/* <!-- Mobile menu button --> */}
                            <div class="md:hidden flex items-center">
                                {/* <button class="outline-none mobile-menu-button">
                                <svg
                                    class=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
                                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                                    <svg
                                        class="fill-current h-3 w-3"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- mobile menu --> */}
                    {/* <div class="hidden mobile-menu">
                        <ul class="">
                            <li class="active">
                                <a
                                    href="index.html"
                                    class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </nav>
            </div>

            <div className="flex-none"></div>
        </div>
    );
    return (
        <div className="overflow-hidden font-juejin">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
        </div>
    );
}
