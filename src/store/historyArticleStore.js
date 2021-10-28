import React from "react";
import { makeAutoObservable, toJS } from "mobx";
import { observer } from "mobx-react";

class HistoryArticleStore {
    historyArticleList = { data: { articles: [] } };

    constructor() {
        makeAutoObservable(this);
    }

    add(article_data) {
        this.historyArticleList["data"]["articles"].push(article_data);
    }

    getData() {
        return toJS(this.historyArticleList);
    }

    reset() {
        this.historyArticleList = ["data"]["articles"];
    }
}

export const historyArticleStore = new HistoryArticleStore();


// export const HistoryArticleView = observer(({ historyStore }) => (
//     <div>
//         {historyStore.historyArticleList}
//     </div>
// ));

