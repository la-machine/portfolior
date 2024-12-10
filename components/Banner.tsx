import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
    return(
        <section id="home" className="max-w-contentContainer mx-auto py-10 mdl:py-24
        flex flex-col gap-4 lgl:gap-8 mdl:px-20 xl:px-4">
            <motion.h3 initial={{y:10, opacity:0}} 
            animate={{y:0, opacity:1}} 
            transition={{duration:0.5, delay:0.6}}
            className="text-lg font-titleFont tracking-wide text-textGreen">
                Hi, my name is 
            </motion.h3>
            <motion.h1 initial={{y:10, opacity:0}} 
            animate={{y:0, opacity:1}} 
            transition={{duration:0.5, delay:0.7}}
            className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
                Youaleu Tchouassi Frank Loic. <span className="text-textDark mt-2 lgl:mt-4">I build softwares </span>
            </motion.h1 >
            <motion.p initial={{y:10, opacity:0}} 
            animate={{y:0, opacity:1}} 
            transition={{duration:0.5, delay:0.8}}
            className="text-base md:max-w-[650px] text-textDark font-medium">
                <b>I am a Backend-Focused Full Stack Developer with expertise in web, mobile, and standalone applications. </b>
                I specialize in backend development, creating efficient, scalable, and secure systems using Java and its ecosystem. 
                With a strong foundation in both backend and frontend technologies, I am committed to delivering robust, 
                user-friendly solutions that meet complex business needs.{" "}
                <a href="#" target="_blank">
                    <span className="text-textGreen inline-flex relative
                    cursor-pointer h-7 overflow-x-hidden group">Learn More
                    <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1
                    -translate-x-[110%] group-hover:translate-x-0 translate-transform
                    duration-500"></span>
                    </span>
                </a>
            </motion.p>
            <motion.button
            initial={{y:10, opacity:0}} 
            animate={{y:0, opacity:1}} 
            transition={{duration:0.5, delay:0.9}}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen 
            rounded-md text-textGreen trackinh-wide hover:bg-hoverColor duration-300">
                Check out my Projects.
            </motion.button>
        </section>
    )
}

export default Banner;