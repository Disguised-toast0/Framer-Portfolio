import React from 'react'
import { motion } from 'motion/react'


const HoveringTexts = () => {

    const Hometexts = ["&","Developer", "&", "Designer"]

  return (
    <div >
      <motion.div
            className='flex flex-shrink-0 cursor-grab font-secondary'
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            {Hometexts.map((text, index) => {
              return <h1
                key={index}
                className='sm:pr-30 pr-10 hover:text-yellow-500 font-black  duration-700 ease-in-out '
              >{text}</h1>
            })}
          </motion.div>
    </div>
  )
}

export default HoveringTexts
