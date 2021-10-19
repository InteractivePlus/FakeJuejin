const JuejinCenterContainer = (props) => {
    const { children } = props;
    return (
        // 居中，移动端底部留出空间给tab
        <div className="flex justify-center mb-10 md:mb-0">
            <div className="flex flex-col max-w-3xl w-full bg-white">
                {children}
            </div>
        </div>
    );
};

export default JuejinCenterContainer;
