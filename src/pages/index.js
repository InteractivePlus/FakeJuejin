import Head from "next/head";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import Nav from "../components/juejinNav";
import JuejinArticleList from "../components/juejinArticleList";


export default function Home() {

    return (
        <div className="font-juejin">
            <Head>
                <title>掘金</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <JuejinArticleList />
        </div>
    );
}
