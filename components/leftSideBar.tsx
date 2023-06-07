import { TbBrandGithub } from "react-icons/tb";
import { TbBrandTwitter, TbBrandLinkedin, TbBrandFacebook } from "react-icons/tb";

const LeftSideBar = () => {
    return(
        <div className="w-full h-full flex flex-col items-center justify-end 
        gap-4 text-textLight">
            <div className="flex flex-col gap-4 ">
                <a href="https://github.com/la-machine" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                    translation-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>
                <a href="https://github.com/la-machine" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                    translation-all duration-300">
                        <TbBrandLinkedin />
                    </span>
                </a>
                <a href="https://twitter.com/LoicPythagore" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2
                    translation-all duration-300">
                        <TbBrandTwitter />
                    </span>
                </a>
                <a href="https://facebook.com/Frank-Loic" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2
                    translation-all duration-300">
                        <TbBrandFacebook />
                    </span>
                </a>
            </div>
            <div className="w-1 h-32 bg-textDark"></div>
        </div>
    );
};

export default LeftSideBar;