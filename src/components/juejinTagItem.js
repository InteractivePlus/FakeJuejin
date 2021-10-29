const JuejinTagItem = (props) => {
    const { children, isActive=false } = props;

    return (
        <div className={`mx-2 rounded-full px-px py-0.5 text-sm  break-all ${isActive ? "bg-juejinactive text-white" : "bg-white text-juejinnav hover:text-juejinactive"}`}>
           <a style={{padding: '0 0.52rem'}} className="cursor-pointer">{children}</a> 
        </div>
    )

}


export default JuejinTagItem;