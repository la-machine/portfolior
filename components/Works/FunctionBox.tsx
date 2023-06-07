import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import React from "react";

const FunctionBox = () => {
    return(
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.1}}
        className="w-full">
            <h3 className="flex gap-1 font-medium  text-xl font-titleFont">Software Engineer
            <span className="text-textGreen tracking-wide">@FunctionBox</span></h3>
            <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Present</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward/> </span>
                    Analysed current system performance and historical data to identify
                    partners and areas in need of improvement
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward/> </span>
                    Partner with senior engineer to apply Scrum development methodology to prototype development task
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward/> </span>
                    Work with engineering teams to define project scope and understanding planning process.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward/> </span>
                    Maintained and expanded knowledge of programming languages to write high-quality
                    Object-Oriented Code
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward/> </span>
                    Collaborate across teams to solve technical and non technical challenges
                </li>
            </ul>
        </motion.div>
    );
}

export default FunctionBox;