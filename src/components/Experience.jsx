import { EXPERIENCES } from "../constants";
import {motion} from "framer-motion";

const Experience =()=>{
  return(
  <div className="border-b border-neutral-900 pb-4 my-20">
 <motion.h2
 whileInView={{opacity: 1 , y: 0}}
 initial={{ opacity:0 , y: -100 }}
 transition={{ duration: 2.5}}
 className="text-center text-4xl">Foramtion</motion.h2>
  <div className="my-10">
  { EXPERIENCES.map((exp,index)=>(
 <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
      <motion.div
       whileInView={{opacity: 1 , x: 0}}
       initial={{ opacity:0 , x: -100 }}
       transition={{ duration: 2.5}}
      
      className="w-full lg:w-1/4">
        <p className="mb-2 text-sm text-neutral-400" >{exp.year}</p>
      </motion.div>
      <motion.div
       whileInView={{opacity: 1 , x: 0}}
       initial={{ opacity:0 , x: 100 }}
       transition={{ duration: 2.5}}
       
       className="w-full lg:w-3/4 max-w-xl">
        <h6 className="mb-2 font-semibold text-neutral-300 ">
          {exp.role}-<span className="text-sm text-purple-100">{exp.company} </span>
        </h6>
        <p className="mb-4 text-neutral-400 text-justify" >{exp.description}</p>
                    
      
      </motion.div>

 </div>





  ))}
  </div>

  </div>


)}
export default Experience;