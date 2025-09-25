'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa"


export default function Footer() {
  return (
    <div className='bg-[#171C2E]  footer ' id='contact'>
        <div  className='flex flex-col md:flex-row  container     w-[90%]  mx-auto  justify-evenly  items-baseline  p-4  '>
               <div className='text-white mb-4 md:mb-0  flex-col  flex  w-1/3 '>
               <h3 className='  font-bold   md:text-lg  '>Quick Links</h3>
                <div className='flex flex-col  mt-2   '>
                <a href="/" className='my-1 hover:text-[#FEBD2F]  text-gray-400'>Home</a>
                <a href="/#about" className='my-1 hover:text-[#FEBD2F]  text-gray-400'>About Us</a>
                <a href="/dashboard/Beef" className='my-1 hover:text-[#FEBD2F]  text-gray-400'>Categories</a>
                <a href="#" className='my-1 hover:text-[#FEBD2F]  text-gray-400'>Contact</a>
                </div>

        </div>
        <div className='text-white  socials   w-1/3'>
            <h3 className='  font-bold  mb-5    md:text-lg  '>Follow Us </h3>
            <div className='mb-4 md:mb-0    flex  md:gap-2 '>
        <a href="#" className='me-2  hover:text-[#FEBD2F]   text-gray-400'><FaFacebook size={28} /></a>
        <a href="#" className='mx-2 hover:text-[#FEBD2F]  text-gray-400'><FaTwitter size={28}  /></a>
        <a href="#" className='mx-2   hover:text-[#FEBD2F]  text-gray-400'><FaInstagram size={28}  /></a>
        <a href="#" className='mx-2 hover:text-[#FEBD2F]  text-gray-400'><FaLinkedin size={28}  /></a>
            </div>
       
        </div>
     
        <div className='text-white mb-4 md:mb-0  flex-col  flex  input  w-1/3'>
        <h3 className='  font-bold   md:text-lg  mb-5 '>Stay Updated</h3>
        <p className='text-gray-400'>Join our newsletter to get the latest recipes and cooking tips straight to your inbox!</p>
        <div>

        <div className='flex  mt-2   '>
            <input type="email" placeholder='Enter your email' className='p-2 rounded-l-lg  outline-none  bg-[#374151]  text-white'/>
            <button className='bg-[#FEBD2F]  text-white  font-semibold   px-4  rounded-r-lg  hover:bg-yellow-400 '>Subscribe</button>
        </div>
        </div>
        </div>
    
            </div>

    
        <hr className='border-gray-600 mx-4'/>

       <div  className=' flex-nowrap   justify-between  flex    container w-[90%]  mx-auto  p-4   items-center  '>
   <div className='    text-gray-400  w-1/2  text-[13px]'>
        &copy; 2024 Recipe App. All rights reserved.    
        </div>
        <div className='   text-gray-400  gap-3  justify-end flex    w-1/2'>
        <a href="#" className='hover:text-[#FEBD2F]  text-[13px]'>Privacy Policy</a> 
         <a href="#" className='hover:text-[#FEBD2F]  text-[13px] '>Terms of Service</a>
        </div>

       </div>
     
     




    </div>
  )
}
