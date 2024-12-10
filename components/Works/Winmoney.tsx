import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import React from "react";

const Winmoney = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Software Engineer Intern
                <span className="text-textGreen tracking-wide">@Winmoney</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">July 2023 - June 2024</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Developed RESTful APIs using Spring Boot, reducing system downtime by 20%.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Integrated ChatGPT API into a customer support chatbot, improving user engagement by 15%.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Automated data extraction from Nasdaq, visualizing stock trends with Python and candlestick charts.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Containerized Python scripts and deployed Docker images to streamline deployment and scalability.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Collaborated with senior engineers to implement a CI/CD pipeline using GitHub Actions, reducing deployment times.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Improved code quality through rigorous testing, reducing production bugs by 30%.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Participated in cross-team collaboration to solve technical and non-technical challenges, enhancing system efficiency.
                </li>
            </ul>
        </motion.div>
    );
};

export default Winmoney;
