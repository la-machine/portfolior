import { TbBrandFacebook, TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";

 const Footer = () => {
    return(
        <div className="hidden mdl:inline-flex xl:hidden items-center justify-center
        w-full py-6 gap-4">
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
    )
 }

 export default Footer;