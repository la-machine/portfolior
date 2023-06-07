import React, {useState} from "react";
import SectionTitle from "./SectionTitle";
import GSC from "./Works/GSC";
import FunctionBox from "./Works/FunctionBox";

const Experient = () => {
    const [WorkGSG, setGSC] = useState(true);
    const [WorkFunctionBox, setFunctionBox] = useState(false);
    const handleGSC = () => {
        setGSC(true);
        setFunctionBox(false);
    };
    const handleFunctionBox = () => {
        setFunctionBox(true);
        setGSC(false);
    }
    return (
        <section id="experience"
        className="max-w-containerxs mx-auto py-10 lgl:py-24">
            <SectionTitle titleName="Where I have Worked"/>
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 mt-20 flex flex-col">
                    <li onClick={handleGSC} className={`${WorkGSG ? "border-l-2 border-l-textGreen text-textGreen" : 
                    "border-l-textDark  text-textDark"}  bg-transparent hover:bg-[#112240] py-3
                    text-sm cursor-pointer duration-300 px-8 font-medium text-textDark`}>
                        GSC
                    </li>
                    <li onClick={handleFunctionBox} className={`${WorkFunctionBox ? "border-l-2 border-l-textGreen text-textGreen" : 
                    "border-l-textDark  text-textDark"}  bg-transparent hover:bg-[#112240] py-3
                    text-sm cursor-pointer duration-300 px-8 font-medium text-textDark`}>
                        Function Box
                    </li>
                    {/* <li className="border-l-2 border-l-hoverColor bg-transparent hover:bg-[#112240] py-3
                    text-sm cursor-pointer duration-300 px-8 font-medium text-textDark">
                        GSC
                    </li>
                    <li className="border-l-2 border-l-hoverColor bg-transparent hover:bg-[#112240] py-3
                    text-sm cursor-pointer duration-300 px-8 font-medium text-textDark">
                        GSC
                    </li> */}
                </ul>
                {WorkGSG && <GSC />}
                {WorkFunctionBox && <FunctionBox />}
            </div>
        </section>
    );
}

export default Experient;