import JuejinRoundAvatar from "./juejinRoundAvatar";

const JuejinArticleCommentBlock = (props) => {
    //获取Props

    const {
        children,
        authorName,
        avatarSrc,
        content,
        like,
        commentCount,
        authorJob,
        commentTime,
    } = props;

    return (
        <div
            className="flex flex-row py-3"
            style={{ borderBottom: "1px solid #e5e6eb" }}>
            <div>
                <JuejinRoundAvatar avatarSrc={avatarSrc}></JuejinRoundAvatar>
            </div>
            <div className="flex-col" style={{ flex: "0 0 90%" }}>
                <div
                    className="px-3 divide-x divide-gray-300 flex flex-row truncate"
                    style={{ fontSize: "14px" }}>
                    <div className="pr-3">{authorName}</div>
                    {authorJob && (
                        <div className="px-3 text-juejinnav">{authorJob}</div>
                    )}
                    <div className="px-3 text-juejinnav">{commentTime}</div>
                </div>
                <div
                    className="break-all p-3"
                    style={{ fontSize: "14px", color: "#4e5969" }}>
                    {content}
                </div>

                <div
                    className="flex flex-row pl-3 items-center"
                    style={{ fontSize: "12px", color: "#4e5969" }}>
                    <div className="flex flex-row">
                        <div>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="#86909c"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.89171 0.830428L9.01333 0.887423C9.82397 1.27824 11.0012 2.06718 11.0012 3.33376C11.0012 3.83594 10.7783 4.50196 10.3324 5.33182H12.8585C14.8478 5.33182 15.3046 7.08773 14.8478 8.40345L12.8585 13.6402C12.6904 14.2493 12.1306 14.6718 11.4918 14.6718H3.32843V5.33182H4.69308L7.65979 1.1115C7.84711 0.813472 8.35277 0.584994 8.89171 0.830428ZM2.33333 5.33268V14.666H1V5.33268H2.33333ZM8.55916 2.15072L5.3856 6.66528H4.66176V13.3386H11.4918C11.5331 13.3386 11.5653 13.3143 11.5732 13.2856L11.5899 13.2253L13.5938 7.94998C13.8572 7.17389 13.5945 6.66528 12.8585 6.66528H8.10231L9.15785 4.70085C9.50885 4.0476 9.66789 3.57253 9.66789 3.33389C9.66789 2.94703 9.2534 2.50946 8.55916 2.15072Z"></path>
                            </svg>
                        </div>
                        <div className="px-1">{like}</div>
                        <div className="pl-2">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="#86909c"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14 1C14.3682 1 14.6667 1.29848 14.6667 1.66667V12.3333C14.6667 12.7015 14.3682 13 14 13H10.5924L8.44602 14.932C8.19248 15.1601 7.8076 15.1601 7.55406 14.932L5.40737 13H2.00004C1.63185 13 1.33337 12.7015 1.33337 12.3333V1.66667C1.33337 1.29848 1.63185 1 2.00004 1H14ZM13.3334 2.33333H2.6667V11.6667H5.919L8 13.5395L10.0807 11.6667H13.3334V2.33333ZM11.3334 6.66667C11.3334 6.48257 11.1841 6.33333 11 6.33333H5.00003C4.81594 6.33333 4.6667 6.48257 4.6667 6.66667V7.33333C4.6667 7.51743 4.81594 7.66667 5.00003 7.66667H11C11.1841 7.66667 11.3334 7.51743 11.3334 7.33333V6.66667Z"></path>
                            </svg>
                        </div>
                        <div className="px-1">{commentCount}</div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default JuejinArticleCommentBlock;
