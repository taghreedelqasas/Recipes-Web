'use client'
import React, { use, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function FeaturedCategories() {

     let [categories, setCategories] = React.useState<any[]>([])
     const [loading, setLoading] = React.useState(true)
     const [mounted, setMounted] = React.useState(false)

     
     
     async function fetchCategories() { 
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            const data = await res.json()
            setCategories(data.categories)
            setLoading(false)
            return data
        }
 
         
         useEffect(() => {  
                setMounted(true)
                fetchCategories()
            }, [])

             console.log(categories);
          if (!mounted) return null
          if (loading) return <p className="text-white  text-center">Loading...</p>
  return (
    <div    className='featured   py-5   shadow-2xl           bg-[#171C2E]   md:pt-0      h-auto    '>
        <motion.div 
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}

          className='   flex   flex-col    items-center   justify-center    '>
                    <h2   className=" relative  text-2xl     px-7   md:text-4xl  text-center    py-5   font-bold   text-white  md:py-10">Featured Categories</h2>
<svg viewBox="0 0 308 20" className="absolute  mt-14   w-52   md:w-80  " fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M213.915 10.3504C203.137 9.78504 194.069 9.30206 189.39 9.0398C180.146 8.52174 158.208 7.46426 140.636 6.69056C127.128 6.0955 104.988 5.18241 84.8868 4.37529C79.2692 4.08486 73.5792 3.7876 67.9722 3.49123C17.8823 0.843606 11.4551 0.551938 8.90096 0.810582C6.25508 1.07875 6.24346 1.11212 8.74941 1.24815C9.43691 1.28547 10.1411 1.3444 10.7426 1.41105C9.62118 1.41057 8.97046 1.44403 8.4761 1.4987C8.3659 1.5109 8.26042 1.52264 8.15965 1.53394C4.30311 1.23475 3.74282 1.26833 4.34452 1.7362C4.47934 1.84101 4.46178 1.95317 4.31895 2.0618C3.94134 2.08241 3.83247 2.14684 3.90824 2.25966C3.52532 2.39177 2.95303 2.5058 2.25393 2.5766C-0.353225 2.84064 -0.282901 2.87763 3.24522 3.09827L3.41198 3.10867C3.09061 3.19212 2.68819 3.26369 2.22302 3.31514C-0.309948 3.59528 -0.233365 3.63222 3.30272 3.83601C5.39599 3.95662 7.63495 4.06872 8.27812 4.08512C8.81154 4.09871 10.6176 4.38082 12.5897 4.75094C11.0649 4.71036 11.5768 4.78951 13.7379 5.02689C13.9714 5.05253 14.2002 5.07891 14.4234 5.10584C15.4689 5.30088 16.578 5.47271 17.7501 5.62128C18.9603 5.87417 19.1703 6.06012 17.629 5.99269C13.1271 5.79573 18.6607 6.55103 29.1118 7.55999C40.4831 8.6578 41.1199 8.68965 96.7075 10.9432C108.55 11.4233 120.727 11.9034 131.784 12.3284C137.989 12.6745 145.497 13.0789 153.176 13.4806C159.005 13.8136 164.917 14.1447 170.416 14.4447C202.839 16.2143 283.877 20.2965 273.087 19.6166C263.907 19.0382 268.701 19.0157 283.237 19.5691C290.731 19.8543 297.148 19.9789 297.498 19.8459C297.848 19.7129 300.127 19.7122 302.563 19.8445C305.861 20.0235 307.024 19.9548 307.114 19.5758C307.149 19.4313 306.964 19.3064 306.474 19.1866C307.107 19.1364 307.372 19.0238 307.381 18.841C307.398 18.4951 306.216 18.2669 302.659 17.9677C304.22 18.0376 304.572 18.0282 303.894 17.9253C304.391 17.8874 304.33 17.7602 303.952 17.5278C303.824 17.4487 303.777 17.3643 303.801 17.2795C304.352 17.2887 304.35 17.2603 303.853 17.1893C304.042 16.9728 304.679 16.7647 305.61 16.6468C307.989 16.3454 307.907 16.3087 304.457 16.1287C302.567 16.03 300.558 15.9397 299.776 15.9174C299.248 15.7961 297.803 15.5911 295.625 15.3283C295.12 15.2381 294.599 15.1414 294.081 15.0412C291.15 14.4743 287.763 14.102 283.924 13.9249C283.067 13.8854 281.956 13.8324 280.627 13.7678C272.726 13.0757 263.147 12.6285 217.491 10.5155C216.302 10.4605 215.109 10.4054 213.915 10.3504ZM26.6416 2.79288C26.4517 2.78911 26.2634 2.78547 26.0772 2.78197C25.6201 2.74378 25.1657 2.70502 24.716 2.66581C25.3616 2.70753 26.0047 2.74998 26.6416 2.79288ZM14.6313 1.48795C15.6556 1.51946 16.8522 1.56148 18.2573 1.61545C15.6715 1.46375 14.5586 1.41967 14.6313 1.48795Z" fill="#60792C" />
</svg>


        </motion.div>
 
        <div  className='   container  md:flex-row   md:flex-nowrap   items-center    flex-col    md:w-[90%]  w-[80%]  mx-auto      flex   justify-center   md:gap-10   gap-3   flex-wrap    '>
            {categories.slice(0,3).map((item) => (  
     
                 
                <div  key={item.idCategory} 

                  className='        flex-col  justify-center   justify-items-center      rounded-lg  '>
                    <motion.div   
                        
                        whileInView={{ rotate:360, scale: 1, opacity: 1 }}
                        initial={{ rotate:0, scale: 0.5, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className='   flex   justify-center    items-center    p-3    '
                    >
                    <img src={item.strCategoryThumb} alt={item.strCategory}   className='  md:w-48   md:h-32   w-32      object-contain    '/>

                    </motion.div>
         <div   className='  text-center  md:pb-5     '>
          <Link href={`/dashboard/${item.strCategory}`}>
              
                                   
                                <h3   className=' text-white   text-xl    font-semibold    '>{item.strCategory}</h3>
          </Link> 
                                <p   className='   py-2      text-xs   font-thin  text-gray-300  '>{item.strCategoryDescription.slice(0,50)}...</p>

            </div>                       
                
                </div>
             
            ))}
          


        </div>

    </div>
  )
}
