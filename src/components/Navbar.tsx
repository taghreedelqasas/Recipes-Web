'use client'
import React, { use } from 'react'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight} from 'lucide-react';
import Link from 'next/link'
import { usePageInView } from 'framer-motion';
import { usePathname } from 'next/navigation';
 
export default function Navbar() {
       
     const pathname = usePathname();
     console.log(pathname);

  return (
    <div   className='     text-black    px-10    z-50       bg-[#0E1326]        fixed       w-full  flex         justify-between   md:items-center   py-3   md:px-20    rounded-b-3xl    shadow-lg    '>
        <div  className='logo   '>  
            <a  href='/'    >   <Image src="https://i.ibb.co/9mYkqcH7/logo2.png" alt="logo"  width={100}  height={50}  className='h-10  md:ms-10    w-30   object-cover   '/>  </a>
            {/* <Image src={logo} alt="logo"    className='h-10  md:ms-10    w-30   object-cover   '/> */}
        </div>
        {/* large devices  */}
        <div  className='  hidden   menu     w-1/2  md:w-1/3   p-2   rounded-2xl    md:flex   justify-center  items-center   '>
            <ul className='  flex   gap-5    text-white    '>
                 
                  
                <li>
                    <a href='/'  className={`hover:text-[#FEBD2F]  ${pathname==='/' ? "text-[#FEBD2F]":" "}   ` }    >Home</a>
                </li>
                <li>
                    <a href='/dashboard/Beef'  className= {`hover:text-[#FEBD2F]   ${pathname==='/dashboard/Beef'?"text-[#FEBD2F]":""  }`}    >Categories</a>
                </li>
                <li>    
                    <Link  href="/#about"  className={`hover:text-[#FEBD2F]   ${pathname ==='/#about'?"text-[#FEBD2F]":""}`}>About</Link>
                </li>
                <li>    
                    <a href='/#contact'  className=' hover:text-[#FEBD2F]   '>Contact</a>
                </li>
                

            </ul>

        </div>

        {/* small devices  */}
        <div  className='  md:hidden    '>
        <Sheet>     
        <SheetTrigger className="       py-1   rounded-lg      shadow-lg        transition   shadow-[#0E1326]  ">
            <AlignRight  className='w-6  h-6   text-white '    />
          </SheetTrigger>
        <SheetContent side="right" className="    py-5     bg-[#0E1326]   text-white   ">
            <SheetHeader>
           <SheetTitle className="text-lg font-semibold  px-6">Menu</SheetTitle>
         </SheetHeader>

            <ul className='     flex   flex-col  p-10  gap-5    text-white    '>
                <li>    
                    <a href='/'  className=' hover:text-[#FEBD2F]   '>Home</a>
                </li>
                <li>
                    <a href='/dashboard/Beef'  className=' hover:text-[#FEBD2F]   '>Categories</a>
                </li>
                <li>    
                    <a href='/#about'  className=' hover:text-[#FEBD2F]   '>About</a>
                </li>
                <li>    
                    <a href='/#contact'  className=' hover:text-[#FEBD2F]   '>Contact</a>
                </li>
            </ul>
        </SheetContent>
      </Sheet>
        </div>
    </div>

  )
}
