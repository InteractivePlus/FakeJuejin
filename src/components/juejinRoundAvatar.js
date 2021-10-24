import React from "react";

const JuejinRoundAvatar = (props) => {
    const { avatarSrc } = props;
    return (
        <div className="flex items-center justify-center space-x-3">
            <div className="rounded-full border-0 border-base-100 overflow-hidden w-10 h-10 ">
                <img className="w-full h-full" src={avatarSrc} />
            </div>
        </div>
    );
};




export default JuejinRoundAvatar;
