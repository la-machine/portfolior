import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { myProfile } from "@/public/asset";

const About = () => {
    return(
        <section id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle titleName ="About Me"/>
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium 
                flex flex-col gap-4">
                    <p>
                        Hello! My name is Youaleu Loic, I am a software engineer
                        and I enjoy creating non-tangible things that live in a machine.
                        My interest in software engineering started back in 2016 when I learned how to code in C and how to build websites in html
                        and I learned a lot that day.
                        Since that day, I got the desire to learn more and to be
                        a software engineer.{" "}
                    </p>
                    <p>Moreover, It is this interest for IT and my desire to know more that fuels 
                        the hard working spirit in me
                    </p>
                    <p>
                        Fast-forwared I had the previlage to do my internship at a start-up,
                        {" "} <a href="https://www.gsc-technology.com" target="_blank"><span className="text-textGreen"> Global Soft And Communication (GSC) </span></a>
                        located at Akwa in Douala Cameroon.
                    </p>
                    <p>Here are some few technologies I have been working with recently : </p>
                    <ul className="max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Java</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        SpringBoot</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        TypeScript</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Angular</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Python</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        JavaScript (basics)</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        NextJs</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        React-native</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Tailwind</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Postgres</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Mysql</li>
                        <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt/></span>
                        Mongodb</li>

                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="w-full absolute h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image className="rounded-lg h-full object-cover" 
                            src={myProfile} alt="Profile Image"/>
                            <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/20
                            rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
                            </div>
                            
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-full border-2 border-textGreen 
                        rounded-md group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                        </div>
                </div>
            </div>
        </section>
    )
}

export default About;