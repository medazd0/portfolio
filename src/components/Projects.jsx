import {PROJECTS} from '../constants'
import {motion} from 'framer-motion'

const Projects = ()=>{
return (
<div  className="border-b boreder-neutral-900 pb-4 " > 
      <motion.h2
       whileInView={{opacity: 1 , y: 0}}
       initial={{ opacity:0 , y: -100 }}
       transition={{ duration: 0.5}}
       className="text-center text-4xl my-10">
      Projects
     </motion.h2>
        {/* <div >
         {
          PROJECTS.map((proj,index)=>(
         <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>
                    <motion.div
                    whileInView={{opacity: 1 , x: 0}}
                    initial={{ opacity:0 , x: -100 }}
                    transition={{ duration: 1}}
                    className="w-full lg:w-1/4">
                    <img width={150} height={150}  className='mb-6 rounded' src={proj.image} alt={proj.title}/>
                    </motion.div>

                    <motion.div
                    whileInView={{opacity: 1 , x: 0}}
                    initial={{ opacity:0 , x: 100 }}
                    transition={{ duration: 1}}

                    className="w-full lg:w-3/4 ">
                      <h6 className='font-semibold mb-4'>{proj.title}</h6>
                      <p className='mb-4 text-neutral-400 text-justify'>{proj.description}</p>
                      {proj.technologies.map((tech,index)=>(
                        <span className='mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900' key={index}>
                          {tech}
                        </span>
                      ))}
                      
                    </motion.div>
                    
                    
          </div>

          ))
         }
        </div> */}


</div>
)


}
export default Projects;