import React from "react";

export function getTimeStampDesc(timespan) {
    timespan = String(timespan);
    // 秒级时间戳补足0转毫秒级
    if (timespan.length < 13) {
        timespan = timespan.padEnd(13, "0");
    }
    timespan = parseInt(timespan);

    var dateTime = new Date(timespan);

    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();

    var now = new Date();
    var now_new = Date.parse(now.toDateString()); //typescript转换写法
    var milliseconds = 0;
    var timeSpanStr;

    const span_in1min = 1000 * 60 * 1;
    const span_in1hour = 1000 * 60 * 60;
    const span_in1day = 1000 * 60 * 60 * 24;
    const span_in1month = 1000 * 60 * 60 * 24 * 30;

    milliseconds = now_new - timespan;
    if (milliseconds <= span_in1min) {
        timeSpanStr = "刚刚";
    } else if (span_in1min < milliseconds && milliseconds <= span_in1hour) {
        timeSpanStr = Math.round(milliseconds / span_in1min) + "分钟前";
    } else if (span_in1hour < milliseconds && milliseconds <= span_in1day) {
        timeSpanStr = Math.round(milliseconds / span_in1hour) + "小时前";
    } else if (span_in1day < milliseconds && milliseconds <= span_in1month) {
        timeSpanStr = Math.round(milliseconds / span_in1day) + "天前";
    } else {
        var tt = new Date(); //今天
        var ty = tt.getFullYear(); //今天年
        var tm = tt.getMonth() + 1; //今天月
        var gm = (ty - year) * 12 + (tm - month); //距今月数
        if (gm < 12) {
            timeSpanStr = String(gm) + "月前";
        } else {
            timeSpanStr = Math.round(gm / 12) + "年前";
        }
    }

    return timeSpanStr;
}

export function convertTimeStampToWord(timespan) {
    // 秒级时间戳补足0转毫秒级
    if (timespan.length < 13) {
        timespan = timespan.padEnd(13, "0");
    }
    timespan = parseInt(timespan);

    var dateTime = new Date(timespan);

    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();

    return `${year}年${String(month).padStart(2, "0")}月${day}日`;
}

export const waitUntil = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));
