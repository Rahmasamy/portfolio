import React from 'react'
import { motion } from 'framer-motion';
import { styles} from '../styles';
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>Hero
       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5` }>
         <div className="flex flex-col justify-center items-center mt-5 ">
            <div className='w-5 h-5 rounded-full bg-[#6b3ecb]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
            


         </div>
         <div>
         <h1 className={`${styles.heroHeadText} text-white`}>
           Hi,I'm  <span className='text-[#915eff]'>Rahma </span>
         </h1>
         <p className={`${styles.heroSubText} mt-2 text-white-100`}>
         I'm a Front-End Developer I can apply my proficiency in HTML, CSS,
         JavaScript, Bootstrap, and React.js.
         </p>
         </div>
        
       </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'> 
         <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-3 mx-5'>
          <motion.div
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration :1.5,
            repeat:Infinity,
            repeatType:'loop'
          }}
          className="w-4 h-3 rounded-full bg-secondary mb-2"
          />

          
         </div>
        </a>
      </div>

    </section>
  )
}

export default Hero