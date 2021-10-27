import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";


class CategoryStore {
    categoryList = {};
    currentMainCategory = 0;
    currentCategory = 0;

    constructor() {
        makeAutoObservable(this);
    }

    add(categoryData) {
        this.categoryList.push(categoryData);
    }
}

export const categoryStore = new CategoryStore();


// export const HistoryArticleView = observer(({ historyStore }) => (
//     <div>
//         {historyStore.historyArticleList}
//     </div>
// ));

