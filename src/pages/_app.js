import "tailwindcss/tailwind.css";
import "./index/index.css";

import "../font/juejin-fontclass.css";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
