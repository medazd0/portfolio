import {motion} from 'framer-motion';
import React from "react";
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from "../constants";

const About =()=>{
return(
  < div className="border-b border-neutral-900 pb-4 " >
       <h2 className="text-center text-4xl my-20">
        About <span className="text-amber-200" >Me</span>
       </h2>
       <div className="flex flex-wrap">
            <motion.div 
            whileInView={{ opacity: 1 ,x:0 }}
            initial={{ opacity: 0, x:-100 }}
            transition={{ duration:1.5  }}

            
            className="w-full lg:p-8 lg:w-1/2">
                    <div className="flex items-center justify-center">
                      <img className="rounded-2xl" src={aboutImg} alt="aboutImg" />
                    </div>   
            </motion.div>
            <motion.div 
             whileInView={{ opacity: 1 ,x:0 }}
             initial={{ opacity: 0, x:100 }}
             transition={{ duration:1.5  }}
            
            
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                      <p className="text-justify my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
                    </div>

            </motion.div>


       </div>


      </div>






);

}
export default About;