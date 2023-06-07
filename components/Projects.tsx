import { form, project1, swing } from "@/public/asset";
import SectionTitle from "./SectionTitle";
import Image  from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
    return(
        <section id="project"
        className="max-w-container mx-auto lgl:px-20 py-24">
            <SectionTitle  titleName="Some Things I have Build "/>
            {/* List of projects */}
         <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
               {/* Project 1 */}
               <div className="w-full flex flex-col iterms-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                   <a href="https://github.com/la-machine?tab=repositories" target="_blank"
                   className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            <Image className="w-full h-full object-contain"
                            src={project1} alt="Resume Builder"/>
                        </div>
                    </a> 
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                items-end text-right xl:-ml-16 z-10">
                    <p className="font-titleFont textitextGreen text-sm tracking-wide"> Featured Project</p>
                    <h3 className="text-2xl font-bold"> Resuim Builder 1.0</h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                        With the Resume builder website you will not more worry on which design to use
                        or how to build your resume. By just filling our form and your resume will be ready
                        you can now <span className="text-textGreen">view and download it in pdf format. </span> 
                    </p>
                    <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
                    md:gap-5 justify-between text-textDark">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Vercel Deployment</li>
                    </ul>
                    <div className="text-2xl flex gap-4">
                        <a href="https://github.com/la-machine" className="hover:text-textGreen duration-300" target="_blank">
                            <TbBrandGithub/>
                        </a>
                        {/* Put the link of the hosted resume builder webside */}
                        <a href="#" className="hover:text-textGreen duration-300" target="_blank">
                            <RxOpenInNewWindow/>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>
            {/* Project 2 */}
            <div className="w-full flex flex-col iterms-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                   <a href="https://github.com/la-machine?tab=repositories" target="_blank"
                   className="w-full xl:w-1/2 h-auto relative group">
                        <div>
                            <Image className="w-full h-full object-contain"
                            src={swing} alt="Resume Builder"/>
                        </div>
                    </a> 
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                items-end text-right z-10">
                    <p className="font-titleFont textitextGreen text-sm tracking-wide"> Featured Project</p>
                    <h3 className="text-2xl font-bold"> Form, table and graphs 1.0</h3>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-10">
                       Here we develope a small desktop app with <span className="text-textGreen">Java swing </span> 
                       And the backend was build with <span className="text-textGreen">Java </span>we also displayed {" "}
                       <span className="text-textGreen">graph </span>  base on the informations found on the table.
                    </p>
                    <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
                    md:gap-5 justify-between text-textDark">
                        <li>Swing</li>
                        <li>Java</li>
                        <li>NetBean</li>
                        {/* <li>Postgres</li> */}
                    </ul>
                    <div className="text-2xl flex gap-4">
                        <a href="https://github.com/la-machine" className="hover:text-textGreen duration-300" target="_blank">
                            <TbBrandGithub/>
                        </a>
                        {/* Put the link of the hosted resume builder webside */}
                        <a href="#" className="hover:text-textGreen duration-300" target="_blank">
                            <RxOpenInNewWindow/>
                        </a>
                    </div>
                </div>
                </div>
                
            </div>
         </div>
        </section>
    )
}

export default Projects;