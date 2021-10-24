import "tailwindcss/tailwind.css";
import "./index/index.css";

import "../font/juejin-fontclass.css";

import { ScrollProvider } from "../utils/scrollContext";

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
