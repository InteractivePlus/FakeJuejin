import React from "react";
import { observer } from "mobx-react";
import {
    toJS,
    makeAutoObservable,
    makeObservable,
    observable,
    computed,
    action,
} from "mobx";

class CategoryStore {
    categoryList = []; //记录总类别
    mainCategory = 0; //当前选中的一级类别
    currentCategory = 0; //当前选中最终类别（一级或二级）

    constructor() {
        // makeAutoObservable(this);
        makeObservable(this, {
            categoryList: observable,
            mainCategory: observable,
            currentCategory: observable,
            setCurrentCategory: action,
            setMainCategory: action,
            setCategoryList: action,
            getCurrentCategory: computed,
            getMainCategory: computed,
            getCategoryList: computed,
        });
    }

    
    setCurrentCategory(categoryId) {
        this.currentCategory = categoryId;
    }

    setMainCategory(categoryId) {
        this.mainCategory = categoryId;
        console.log('mmm',this.mainCategory)
    }

    setCategoryList(list) {
        this.categoryList = list;
    }

    get getCurrentCategory() {
        return this.currentCategory;
    }

    get getMainCategory() {
        return this.mainCategory;
    }

    get getCategoryList() {
        return toJS(this.categoryList);
    }
}

export const categoryStore = new CategoryStore();

export const CategoryView = observer(({ categoryStore }) => (
    <div>{categoryStore.categoryList}</div>
));
