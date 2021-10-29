import Head from "next/head";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import Nav from "../components/juejinNav";
import JuejinArticleList from "../components/juejinArticleList";

import { TimerView, myTimer } from "../store/historyArticleStore";

import { resetIdCounter } from "react-tabs";

import JuejinTagList from "../components/juejinTagList";
import { categoryStore } from "../store/categoryStore";


import { Provider } from "mobx-react";


const Home=()=> {

    return (
        <div className="font-juejin">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Provider categoryStore={categoryStore}> */}
            <Nav categoryStore={categoryStore} />
            <JuejinTagList categoryStore={categoryStore} />
            {/* </Provider> */}
            <JuejinArticleList categoryStore={categoryStore} />
        </div>
    );
}

Home.getInitialProps = async (ctx) => {
    resetIdCounter();
    return {};
};

export default Home;