import React from "react";
interface Props{
    titleName : string;
}

const SectionTitle = ({titleName}:Props) => {
    return(
        <h2 className="font-fontTitle text-2xl font-semibold flex items-center">
            {/* <span className="text-base md:text-lg text-textGreen mr-2"></span> */}
            {titleName}
            <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
        </h2>
    )
}

export default SectionTitle;