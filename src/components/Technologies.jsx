import {RiReactjsLine} from "react-icons/ri";
import {RiJavaFill} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import {animate, easeIn, motion} from "framer-motion" ;
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
const varIcon=(delay)=>({

initial:{ y: -10},

animate: {
  y:[10,-10],
  transition:{
    duration: delay,
    ease: "linear",
    repeat: Infinity,
    repeatType:"reverse"
  }
}

})


const Technologies =()=>{

return(
  <div className="border-r-b border-neutral-800 ">
      <motion.h2 
      whileInView={{ opacity: 1 ,y: 0 }}
      initial={{ opacity: 0 , y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-6 text-center text-3xl">
      Technologies
      </motion.h2>
       <motion.div
       whileInView={{ opacity: 1 , x: 0 }}
       initial={{ opacity:0 , x: -100}}
       transition={{ duration: 2}}

        className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <motion.div
            variants={varIcon(2.5)}
            initial="initial"
            animate="animate"
            
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <RiReactjsLine className='text-7xl text-cyan-400'  />
            </motion.div>
            <motion.div
            variants={varIcon(6)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <RiJavaFill className='text-7xl text-[#B07219]'  />
            </motion.div>
            <motion.div
            variants={varIcon(4)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <FaNodeJs className='text-7xl text-green-600'  />
            </motion.div>
            <motion.div
            variants={varIcon(5)}
            initial="initial"
            animate="animate"
            
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <RiJavascriptFill  className='text-7xl text-yellow-400'  />
            </motion.div>
            <motion.div
            variants={varIcon(3)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <FaHtml5  className='text-7xl text-orange-600'  />
            </motion.div>
            <motion.div 
            variants={varIcon(4.5)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              < FaCss3Alt className='text-7xl text-blue-500'  />
            </motion.div>
            <motion.div
            variants={varIcon(4)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <RiTailwindCssFill  className='text-7xl text-teal-400'  />
            </motion.div>
            <motion.div
            variants={varIcon(6.5)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              < FaPhp  className='text-7xl text-purple-700'  />
            </motion.div>
            <motion.div
            variants={varIcon(5)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
              <FaFigma className="text-figmaColor text-7xl" />
            </motion.div>
            <motion.div
            variants={varIcon(4)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
                <SiAdobeillustrator className="text-[#FF9A00] text-7xl" />
            </motion.div>
           
            <motion.div
            variants={varIcon(6)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
                <SiAdobeaftereffects className="text-[#A77BCA] text-7xl" />
            </motion.div>
            <motion.div
            variants={varIcon(6.5)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
                  <SiAdobephotoshop className="text-[#31A8FF] text-7xl" />
            </motion.div>
            <motion.div
            variants={varIcon(4)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 rounded-2xl p-4">
                  <FcLinux className="text-7xl"/>
            </motion.div>
          
       </motion.div>

     


  </div>





);





}
export default Technologies;