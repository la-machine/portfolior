import React from "react";

const RightSideBar = () => {
    return(
        <div className="w-full h-full flex flex-col items-center justify-end gap-10
        text-textLight">
            <a href="mailto:frankpythagore@gmail.com">
                <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">frankpythagore@gmail.com</p>
            </a>
            <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
        </div>
    )
}

export default RightSideBar;