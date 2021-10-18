import React from "react";

const JuejinBasicListItem = (props) => {
    const { children } = props;
    return (
        <li className="flex-1 w-auto px-6 pt-3">
            <div className="flex flex-1 flex-col border-b border-gray-200 w-auto">
                {children}
            </div>
        </li>
    );
};

export default JuejinBasicListItem;
