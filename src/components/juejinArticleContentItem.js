import JuejinBasicListItem from "../components/JuejinBasicListItem";
import JuejinRoundAvatar from "./juejinRoundAvatar";
import { convertTimeStampToWord } from "../utils/timeUtils";

const JuejinArticleContentItem = (props) => {
    const { articleFullInfo } = props;
    console.log(articleFullInfo);
    console.log(
        new Date(
            parseInt(
                articleFullInfo["article"]["article_info"]["ctime"].padEnd(
                    13,
                    "0"
                )
            )
        )
    );
    return (
        <div>
            <JuejinBasicListItem>
                <div className="flex flex-1 flex-row mt-1 pb-3 items-center">
                    <div className="flex flex-1 overflow-hidden">
                        <div>
                            <JuejinRoundAvatar
                                avatarSrc={
                                    articleFullInfo["article"][
                                        "author_user_info"
                                    ]["avatar_large"]
                                }></JuejinRoundAvatar>
                        </div>
                        <div className="flex flex-1 flex-col w-full">
                            <div className="mb-1 text-gray-800 truncate">
                                {
                                    articleFullInfo["article"][
                                        "author_user_info"
                                    ]["user_name"]
                                }
                            </div>
                            <div className="text-gray-400 text-sm truncate">
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
                                        articleFullInfo["article"][
                                            "article_info"
                                        ]["ctime"]
                                    )}
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: articleFullInfo["article"]["article_content"],
                    }}></div>
            </JuejinBasicListItem>
        </div>
    );
};

export default JuejinArticleContentItem;
