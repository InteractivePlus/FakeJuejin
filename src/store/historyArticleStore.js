import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// Model the application state.
// class Timer {
//     secondsPassed = 0;

//     constructor() {
//         makeAutoObservable(this);
//     }

//     increase() {
//         this.secondsPassed += 1;
//     }

//     reset() {
//         this.secondsPassed = 0;
//     }
// }


class HistoryArticleStore {
    historyArticleList = { data: { articles: [] } };

    constructor() {
        makeAutoObservable(this);
    }

    // increase() {
    //     this.secondsPassed += 1;
    // }

    add(article_data) {
        this.historyArticleList["data"]["articles"].push(article_data);
    }

    getData() {
        return this.historyArticleList;
    }

    reset() {
        this.historyArticleList = ["data"]["articles"];
    }
}

export const historyArticleStore = new HistoryArticleStore();


// // Build a "user interface" that uses the observable state.
export const HistoryArticleView = observer(({ historyStore }) => (
    <div>
        {historyStore.historyArticleList}
    </div>
));


// export const myTimer = new Timer();

// // Build a "user interface" that uses the observable state.
// export const TimerView = observer(({ timer }) => (
//     <button onClick={() => timer.increase()}>
//         Seconds passed: {timer.secondsPassed}
//     </button>
// ));

// ReactDOM.render(<TimerView timer={myTimer} />, document.body);

// // Update the 'Seconds passed: X' text every second.
// setInterval(() => {
//     myTimer.increase();
// }, 1000);
