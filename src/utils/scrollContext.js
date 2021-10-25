/**
 * @file 用context hook做一个全局滚动条底部事件触发状态共享
 * @version v1.0
 */
import React from "react";

const scrollContext = React.createContext({});

//将scrollContext.Provider封装成第三方组件，管理滚动条是否到底的状态
//并通过context与其他组件共享该状态
export const ScrollProvider = ({ children }) => {
    const [isScrollToBottom, setIsScrollToBottom] = React.useState(false);

    React.useEffect(() => {
        //组件挂载时
        window.onscroll = () => {
            // console.log(
            //     "inner:",
            //     window.innerHeight,
            //     "y:",
            //     window.scrollY,
            //     "bodyoffset",
            //     document.body.offsetHeight
            // );
            // 留出1px容错空间，别问，问就是玄学
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 2
            ) {
                setIsScrollToBottom(true);
            } else {
                setIsScrollToBottom(false);
            }
        };
        //组件卸载前
        return () => {
            // window.removeEventListener();
        };
    }, []); //带一个空参数，这样的useEffect相当于componentDidMount

    return (
        <scrollContext.Provider value={{ isScrollToBottom }}>
            {children}
        </scrollContext.Provider>
    );
};

//自定义Hook，作为和isScrollToBottom状态绑定的“行为”，它通过context接收新封装的provider中的数据
export const useScrollBottom = () => {
    const { isScrollToBottom } = React.useContext(scrollContext);
    // console.log("use");
    return { isScrollToBottom };
};
