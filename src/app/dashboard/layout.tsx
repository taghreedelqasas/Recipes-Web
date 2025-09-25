'use client'
import Header from "@/components/Header";
import SideApp from "@/components/SideApp";
import { Search } from 'lucide-react';
import Image from 'next/image';
import SearchInput from './SearchInput';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div> 
      {/* <Header/>  */}
  <div  className="container  w-[95%]  mx-auto  py-10     ">

     <div   className="     mt-10   rounded-lg  relative    md:mb-10    w-full  h-36  md:h-60    ">
      <Image  src="/cat.jpg" alt="dashboard"  fill  className="   object-cover  rounded-lg    "/>
     </div>

        <div  className="   flex  container  w-[95%]    mx-auto   justify-between   items-center     mb-5    ">
        <div  className="     ">
        <h2   className="text-white  text-lg       md:text-2xl pt-5     md:py-5   font-semibold   ">Categories</h2>
   
        </div>
 <SearchInput/>
        </div>
      

   <div     className=" flex    md:justify-center     md:gap-5   flex-wrap  md:flex-nowrap     md:flex-row  relative ">
   
    <SideApp />
      {children }
   </div>

  </div>
    </div>
  

  );
}
