import React, {useState} from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
    return(
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="flex w-full flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">Other Projects</h2>
                <p className="text-sm font-titleFont text-textGreen">View the project archive</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10
            lgl:px-10">
                <ArchiveCard title="Role Base Authentication" des="We use spring boot to create an api for authentication that will
                    handle privilages and permisions to users with certain role there
                    by preventing some other users from performing tasks which they don't have permisions to"
                    listItems={["Spring Boot", "thymeleaf", "Spring Security", "Postgres"]}/>
                    <ArchiveCard title="JWT Authentication" des="We use spring boot to create an api for authentication that will
                    make use of Json web tokens. This is also use to handle session creation
                    This project is private on my github because its for an organisation and its still on development"
                    listItems={["Spring Boot", "Spring Security", "JWT", "Postgres"]}/>
                    <ArchiveCard title="Whatsapp Clone 1.0" des="We use android studio and firebase to create a
                    whatsapp clone that will permit the user to send and recieve sms, send documents and also
                    create and integrate groups.This project is still on development "
                    listItems={["Android Studio", "Firebase", "Java jdk"]}/>
                    {
                        showMore && (
                            <>
                                <motion.div initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{delay:0.1}}
                                >
                                <ArchiveCard title="Fullstack Authentication" des="We use Angular and spring boot to create a
                                    complete user registration and SignIn with email verification and role base redirection(authentication).
                                    This was build on an organisation project so its not presently found on my github but will upload a sample as soon as possible"
                                    listItems={["Spring Boot", "Angular", "JWT", "Postgres"]}/>
                                </motion.div>
                                <motion.div initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{delay:0.2}}
                                >
                                <ArchiveCard title="Chat App" des="We use android studio to create an app were users will be able to 
                                    chat with each others freely. We added a notification and an online arlet such that when a user is 
                                    online we can see and when someone text us when we are not on the app we recieve a notification"
                                    listItems={["Spring Boot", " Security", "JWT", "Postgres"]}/>
                                </motion.div>
                                <motion.div initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{delay:0.3}}
                                >
                                <ArchiveCard title="Sort App" des="We use Tkinter (python)  to create a small desktop app that will
                                    be use for a random sorting and selection of group. That is we enter the number of groups we want, number of student and
                                    the list of student. From there it will randomly generate groups and assign everybody to a particular group"
                                    listItems={["Tkinter", "Random", "VScode"]}/>
                                </motion.div>
                            </>
                        )
                    }
            </div>
            <div className="mt-12 flex items-center justify-center">
                {
                    showMore ? <button onClick={() => setShowMore(false)} className="w-36 h-12 rounded-md text-textGreen test-[13px] border
                    border-textGreen hover:bg-hoverColor duration-300">
                        Show Less
                    </button> : <button onClick={() => setShowMore(true)} className="w-36 h-12 rounded-md text-textGreen test-[13px] border
                border-textGreen hover:bg-hoverColor duration-300">
                    Show more
                </button>
                }
            </div>
        </div>
    )
}

export default Archive;