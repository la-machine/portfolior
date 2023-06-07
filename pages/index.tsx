import Navbar from '@/components/navbar'
import RightSideBar from '@/components/RightSideBar'
import LeftSideBar from '@/components/leftSideBar'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experient from '@/components/Experient'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='font-bodyFont w-full h-screen bg-bodycolor text-textLight
    overflow-x-hidden overflow-y-scroll' >
      <Navbar />
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
          className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'> 
          <LeftSideBar /> 
        </motion.div>
        <motion.div className='h-[88vh] w-full mx-auto p-4'>
          <Banner/>
          <About/>
          <Experient/>
          <Projects />
          <Archive/>
          <Contact/>
          <Footer/>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} 
        className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
          <RightSideBar />
        </motion.div>
      </div>
    </main>
  )
}
