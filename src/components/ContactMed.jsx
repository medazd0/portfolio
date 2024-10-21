import { CONTACT } from "../constants"
import {motion} from "framer-motion"
 const ContactMed=()=>{
return(
<>
<motion.h2 
whileInView={{opacity:1 , y:0 }}
initial={{ opacity:0 , y: -100}}
transition={{ duration: 1}}
className="text-center text-3xl my-10">Get In Touch</motion.h2>
        <div className="text-center">
          <motion.p
          whileInView={{opacity:1 , x:0 }}
          initial={{ opacity:0 , x: -100}}
          transition={{ duration: 0.5}}
          className="my-4">{CONTACT.address}</motion.p>
          <motion.p
          whileInView={{opacity:1 , x:0 }}
          initial={{ opacity:0 , x: -100}}
          transition={{ duration: 0.5}}
          className="my-4">{CONTACT.phoneNo}</motion.p>
          <motion.a 
                    whileInView={{opacity:1 , x:0 }}
                    initial={{ opacity:0 , x: -100}}
                    transition={{ duration: 0.5}}
                    className="my-4" href="mailto:{CONTACT.email}">{CONTACT.email}</motion.a>



          
        </div>
        <a href="/assets/MEDCV.pdf" download>Télécharger mon CV</a>



</>

);

}
export default ContactMed;
