import JuejinBasicListItem from "./JuejinBasicListItem";
import JuejinRoundAvatar from "./juejinRoundAvatar";
import { convertTimeStampToWord } from "../utils/timeUtils";

const JuejinArticleContentItem = (props) => {
    const { articleFullInfo } = props;

    // console.log(articleFullInfo);

    return (
        <div className="flex flex-1 flex-col px-6 pt-3 border-b-2 border-gray-200 w-auto">
            <div className="flex flex-1 flex-row mt-1 pb-3 items-center">
                <div className="flex flex-1 overflow-hidden  items-center">
                    <div className="mr-4">
                        <JuejinRoundAvatar
                            avatarSrc={
                                articleFullInfo["article"]["author_user_info"][
                                    "avatar_large"
                                ]
                            }></JuejinRoundAvatar>
                    </div>
                    <div
                        className="flex flex-1 flex-col w-full"
                        // style={{ fontSize: "1.3rem" }}
                    >
                        <div className="text-gray-800 truncate">
                            {
                                articleFullInfo["article"]["author_user_info"][
                                    "user_name"
                                ]
                            }
                        </div>
                        <div
                            className="flex text-gray-400 text-sm truncate"
                            // style={{ fontSize: "1.1rem" }}
                        >
                            <time
                                dateTime={
                                    new Date(
                                        parseInt(
                                            articleFullInfo["article"][
                                                "article_info"
                                            ]["ctime"].padEnd(13, "0")
                                        )
                                    )
                                }>
                                {convertTimeStampToWord(
                                    articleFullInfo["article"]["article_info"][
                                        "ctime"
                                    ]
                                )}
                            </time>
                            <div className="ml-2">
                                {`阅读 
                                        ${articleFullInfo["article"]["article_info"]["view_count"]}
                                    `}
                            </div>
                        </div>
                    </div>
                    <button className="h-6 px-3 rounded-sm text-juejin-focus-btn border border-juejin-focus-btn hover:opacity-80 text-sm ">
                        关注
                    </button>
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={{
                    __html: articleFullInfo["article"]["article_content"],
                }}></div>
        </div>
    );
};

export default JuejinArticleContentItem;
