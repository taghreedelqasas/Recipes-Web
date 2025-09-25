'use client'
import React, { use, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'


 
export default function SideApp() {
   
     let [categories, setCategories] = useState<any[]>([])
     const [loading, setLoading] = useState(true)
     const [mounted, setMounted] = useState(false)
      const router = useRouter()
      const pathname = usePathname();
       
      async  function getCategories(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const data = await res.json()
    // console.log(data);
   setCategories(data.categories)
   setLoading(false)
    return data
 }
 

    
 useEffect(()=>{
     setMounted(true)
     getCategories()
       
 },[])
  useEffect(()=>{
      if(mounted && categories.length>0){
    router.replace(`/dashboard/${categories[0].strCategory}`)
    console.log(categories[0].strCategory);
   }
  },[categories, mounted])



     console.log(categories);
     

  return (

 <div className="md:w-72 w-full overflow-y-auto rounded-lg  scrollbar-hide">
      <ul
        className="
          md:gap-2
          w-full
          flex gap-2
          md:flex-col
          rounded-lg shadow-md
          overflow-y-auto
          md:h-[600px]
          scrollbar-hide
          p-3
          md:max-h-[700px] md:pr-2

        "
      >
        {categories.map((item, index) => {
          const linkHref = `/dashboard/${item.strCategory}`;
          const isActive =
            pathname === linkHref || (index === 0 && pathname === "/dashboard");

          return (
            <li key={item.strCategory} className="md:mb-2">
              <Link
                href={linkHref}
                className={`flex items-center overflow-hidden w-40 md:w-full text-sm border border-[#2E2E2E] rounded-2xl
                  ${
                    isActive
                      ? "bg-[#FEBD2F] text-black"
                      : "text-white hover:text-black hover:bg-[#FEBD2F]"
                  }`}
              >
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="md:size-12 size-8 -translate-x-3 rounded-full"
                />
                {item.strCategory}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );


  }


    