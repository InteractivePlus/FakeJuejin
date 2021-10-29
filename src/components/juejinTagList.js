import React from "react";

import JuejinTagItem from "./juejinTagItem";

// import { categoryStore } from "../store/categoryStore";

import { isEmpty } from "../utils/commonutils";

import { observer,inject } from "mobx-react";
import {
    toJS,
    makeAutoObservable,
    makeObservable,
    observable,
    computed,
    action,
    flow,
} from "mobx";

// @inject('a')
const JuejinTagList = observer(({ categoryStore }) => {
    const categoriesList = categoryStore.getCategoryList;
    const mainCategory = categoryStore.getMainCategory;
    const currentCategory = categoryStore.getCurrentCategory;

    const subCategories = isEmpty(categoriesList)
        ? 0
        : categoriesList[mainCategory]["children"];


    // 检测一级类别改变
    React.useEffect(() => {
        // 初始化选中第一个二级类别（即“全部”）
        handleClickSubCategory(mainCategory);
    }, [mainCategory]);

    // 二级类别点击处理
    let handleClickSubCategory = (categoryId) => {
        categoryStore.setCurrentCategory(categoryId);
    };

    return subCategories ? (
        <div className="flex items-center justify-center my-7">
            <div className="flex flex-row">
                <div
                    onClick={() => {
                        handleClickSubCategory(mainCategory);
                    }}>
                    <JuejinTagItem isActive={mainCategory == currentCategory}>
                        全部
                    </JuejinTagItem>
                </div>
                {subCategories &&
                    subCategories.map((item) => {
                        // console.log(item["category_name"]);
                        return (
                            <div
                                key={item["category_id"]}
                                onClick={() => {
                                    handleClickSubCategory(item["category_id"]);
                                }}>
                                <JuejinTagItem
                                    isActive={
                                        item["category_id"] == currentCategory
                                    }>
                                    {item["category_name"]}
                                </JuejinTagItem>
                            </div>
                        );
                    })}
            </div>
        </div>
    ) : (
        <div></div>
    );
});

export default JuejinTagList;
