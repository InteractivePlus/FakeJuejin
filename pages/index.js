import Head from 'next/head'

export default function Home() {
  const Nav = () => (
    <div className="sticky top-0  w-full mx-auto bg-white border-b border-gray-200 flex-none flex">
      <div className="flex-none flex mx-auto p-5">
        <div className="flex-none items-center mr-5">
          <img className="w-auto h-6" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg" />
        </div>
        <div className="flex-auto flex items-center ml-3">
          <ul className="flex-grow flex text-juejinnav">
            <li className="flex-1 px-5">
              <a className="cursor-pointer">
                首页
              </a>
            </li>

            <li className="flex-1 px-5">
              <a className="cursor-pointer">
                沸点
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

  )
  return (
    <div className="overflow-hidden font-juejin">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="min-h-screen  mx-auto bg-juejinbg"></div>


    </div>
  )


}
