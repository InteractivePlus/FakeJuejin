import React from "react";

import JuejinTagItem from "./juejinTagItem";

const JuejinTagList = (props) => {
    const { mainCategory,subCategories } = props;
    const [currentCategory, setCurrentCategory] = React.useState(0); //当前选中类别

    React.useEffect(() => {
        // 初始化选中第一个类别（即“全部”）
        setCurrentCategory(mainCategory);
    }, []);
    
    let handleClickSubCategory = (categoryId) => {
        setCurrentCategory(categoryId);
        
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
                {subCategories.map((item) => {
                    console.log(item["category_name"]);
                    return (
                        <div
                            onClick={() => {
                                handleClickSubCategory(item["category_id"]);
                            }}>
                            <JuejinTagItem
                                isActive={item["category_id"] == currentCategory}>
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
};

export default JuejinTagList;
