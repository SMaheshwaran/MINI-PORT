import React from 'react'
import {motion} from "framer-motion"

const Skills = ({name,x,y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold
    '
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{ x:x, y:y, transition: {duration:1.5} }}
    viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
}

const Skill = () => {
  return (
    <>
    <h2 className='w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32'>Skills</h2>
    <div className='relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark 
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>
      <motion.div className='flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 '
      whileHover={{scale:1.05}}
      >Web 
      </motion.div>

      <Skill name="HTML" x="-20vw" y="2vw"/>
      <Skill name="CSS" x="3vw" y="-7vw"/>
      <Skill name="Javascript" x="20vw" y="4vw"/>
      <Skill name="ReactJS" x="-10vw" y="11vw"/>
      <Skill name="NextJS" x="-22vw" y="-15vw"/>
      <Skill name="Web Design" x="32vw" y="-6vw"/>
      <Skill name="Graphic Design" x="15vw" y="-15vw"/>
      <Skill name="Figma" x="-7vw" y="-21vw"/>
      <Skill name="Tailwindcss" x="-29vw" y="18vw"/>
      <Skill name="Adobe XD" x="9vw" y="-24vw"/>
      

    
    </div>
    </>
  )
}

export default Skills