import { HERO_CONTENT } from "../constants";
import logomed from '../assets/logomed.png';
import { motion } from 'framer-motion';
import {  useTypewriter , Cursor} from 'react-simple-typewriter'
import CvMed from '../assets/MEDCV.pdf'
import { FaArrowAltCircleDown } from "react-icons/fa";

const container = (duration) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: duration }
  },
});


const Hero = () => {
 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CvMed; 
    link.download = 'CVMEDAZ.pdf'; 
    link.click();
  };
  const [nameDev]=useTypewriter({
    words:['Mohamed AZOUD'],
    loop: 0,

    
  
    })


  return (
    <div className="border-b border-neutral-900 pb-4 mt-6 lg:mb-36 relative">
      <div className="flex flex-wrap">
        <div className="w-2/3 lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" mr-10 mb-10 text-4xl font-thin tracking-wide lg:mt-16 lg:text-5xl"
            >
              {nameDev}<Cursor cursorStyle='<' />
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex flex-col items-center justify-center translate-x-28 -translate-y-20">
          <div className="flex justify-center ">
            <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{x: 0, opacity:1 }}
            src={logomed} alt="med AZOUD" />
          </div>
         <div className="flex flex-col items-center -translate-y-14">
          <div>
          Download My CV below       
          </div>
           
         <div className="relative flex items-center justify-center w-20 h-20  hover:cursor-pointer" onClick={handleDownload} >
      
      <div className="relative z-10 flex items-center justify-center lg:w-20 lg:h-20 rounded-full bg-[#8641B7] shadow-lg w-10 h-10 hover:bg-[#AA6AD8] transition duration-200 ease-in-out">
        <FaArrowAltCircleDown className="text-4xl text-[#BC80E7]" />
      </div>

     
      <div className="absolute w-full h-full rounded-full border border-blue-500 animate-wave"></div>
      <div className="absolute w-full h-full rounded-full border border-blue-500 animate-wave delay-500"></div>
      <div className="absolute w-full h-full rounded-full border border-blue-500 animate-wave delay-1000"></div>
    </div>
         </div>


        </div>
      </div>
    </div>
  );
};

export default Hero;
