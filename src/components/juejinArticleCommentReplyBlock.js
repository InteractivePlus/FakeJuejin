









const JuejinArticleCommentReplyContainer = (props) => {
    const { children } = props;

    return (
        <div className="flex-col flex mt-3" style={{
            padding: '0 12px',
            background: '#f7f8fa',
            borderRadius: '2px'
        }}>
            {children}
        </div>
    )


}



export default JuejinArticleCommentReplyContainer ;