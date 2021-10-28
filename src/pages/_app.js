import "tailwindcss/tailwind.css";
import "./index/index.css";

import "../font/juejin-fontclass.css";

import { ScrollProvider } from "../utils/scrollContext";

// 适用于服务端静态渲染
// import { enableStaticRendering } from "mobx-react";
// enableStaticRendering(true);


function MyApp({ Component, pageProps }) {
    return (
        <div>
            <ScrollProvider>
            <Component {...pageProps} />
            </ScrollProvider>
        </div>
    );
}

export default MyApp;
