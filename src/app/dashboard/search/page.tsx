// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link"; 
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { motion } from "framer-motion";
// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q"); // الكلمة اللي كتبها اليوزر
//   const [meals, setMeals] = useState<any[]>([]);

//   useEffect(() => {
//     if (query) {
//       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setMeals(data.meals || []);
//         });
//     }
//   }, [query]);

//   return (
//     <div    className=" font-bold     w-full   text-lg    h-1/2       max-h-[700px]    scrollbar-hide   overflow-y-auto rounded-lg   p-3  ">
//       <h1 className="text-xl font-bold mb-4  text-white">Results for: {query}</h1>
//       <div className="flex  mealDisplay   gap-y-3  justify-evenly  flex-wrap">
//         {meals.length > 0 ? (
//           meals.map((meal) => (
//              <Link  key={meal.idMeal}   href={`/recipe?q=${meal.idMeal}`}>
//             <div key={meal.idMeal} className="md:w-50   w-24  bg-[#394050]    p-2   rounded-lg   shadow-md   overflow-hidden ">
//               <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded" />
//               <h2 className="  py-2    text-white   text-sm  font-light">{meal.strMeal}</h2>
//             </div>
//             </Link>
//           ))
//         ) : (
//           <div>
//             <DotLottieReact
//                src="/animations/Empty box.json"
//               autoplay  
//               loop
//               style={{ width: 300, height: 300 }}
//             />
             
//               <motion.div  
//               whileInView={{ scale: 1, opacity: 1 }}
//               initial={{ scale: 0.5, opacity: 0 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//            >
//            <div   className="  flex  justify-center    ">

//             <p className=" text-center uppercase  text-4xl  text-white  ">No results found</p>
//            </div>
//             </motion.div>
//           </div>
//         )}  
//         </div>  


//     </div>    
   


  
        
//   );
// }



"use client";

import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
