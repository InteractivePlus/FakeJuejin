import Head from "next/head";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import Nav from "../components/juejinNav";
import JuejinArticleList from "../components/juejinArticleList";
import JuejinTagList from "../components/juejinTagList";
import { TimerView, myTimer } from "../store/historyArticleStore";

import { resetIdCounter } from "react-tabs";

const Home=()=> {

    return (
        <div className="font-juejin">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <JuejinTagList />
            {/* <TimerView timer={myTimer} /> */}
            <JuejinArticleList />
        </div>
    );
}

Home.getInitialProps = async (ctx) => {
    resetIdCounter();
    return {};
};

export default Home;