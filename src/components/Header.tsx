'use client'
import React from 'react'
import { Playfair_Display, Poppins } from "next/font/google";
import Image from 'next/image'
import {motion} from 'framer-motion'

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // اختاري الأوزان اللي محتاجاها
});



// Sans-serif (للنصوص)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export default function Header() {
  return (
    <div  id='home'   className='  lg:p-2  pb-20  md:py-10   md:h-dvh   flex   overflow-y-hidden  overflow-x-hidden     container  w-[90%]   mx-auto   home   '>
      <div  className=' md:flex-row  flex    flex-col-reverse  gap-5 md:gap-0  justify-center     justify-items-center   md:py-14     md:justify-between   w-[95%]   mx-auto      z-0  md:items-center    '>
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}

      
        className='   md:ps-2  md:w-full     md:px-0    leading-tight     text-white '>
          <span  className='  text-[10px] font-light  ps-2  text-gray-300  ' >COOK WITH CARE</span>
          <h1  className="lg:text-[60px]  text-3xl   md:text-4xl  poppins.classname      lg:leading-16   lg:w-2/3  italic"> Your Home for Tasty Recipes 
<svg
  className="mx-auto -mt-3 w-32 h-auto sm:w-40   lg:w-56"
  viewBox="0 0 193 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M192 5C187.38 2.36 177.41 0.67 141.82 2.81C113.762 4.49711 65.64 10.56 37.85 14.105C10.06 17.65 4.12 19.3 2.05 20.15C-0.0200002 21 1.96 21 25.255 17.865C48.55 14.73 93.1 8.46 121.66 5.23C150.22 2 161.44 2 168.375 2.495C175.31 2.99 177.62 3.98 179.8 4.49C181.98 5 183.96 5 186 5"
    stroke="#5C7821"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>

            </h1>
          
          <p   className='w-[300px]  text-lg  text-gray-300      font-light '>From quick meals to gourmet dishes, we’ve got you covered</p>
           <button       className='  bg-white   text-black   px-3  py-1   rounded-lg   mt-3   hover:bg-[#FEBD2F]  shadow-lg        transition   shadow-[#0E1326]  '><a href='/dashboard'  >Explore Recipes</a></button>
      </motion.div>
   

         <motion.div  
         
          animate={{  scale: [1, 1.2, 1], rotate: [0, 10, -10, 0]  }}
          
          transition={{ duration: 5 ,ease:'linear',repeat: Infinity, repeatDelay: 1 }}
       
           className='  relative  pt-20  md:pt-0       md:w-1/2     w-full    flex   justify-center    items-center   '>
          <img  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="recipe image"  width={400}   height={400}  className='    w-64  md:w-full'/>

         </motion.div>

    </div>

</div>


  )
}
