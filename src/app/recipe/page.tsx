

'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState, Suspense } from 'react'
import Image from 'next/image'
import Lottie from "lottie-react";
import cookingAnimation from '../../../public/animations/94cMra1uw8.json'
import { motion } from 'framer-motion'

function RecipeContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [meal, setMeal] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(query){
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`)
        .then(res => res.json())
        .then(data => {
          setMeal(data.meals ? data.meals[0] : null);
          setLoading(false);
        })
    }
  }, [query]);

  if(loading) return (
    <div className="h-screen w-full flex justify-center items-center">
      <span className="loader"></span>
    </div>
  );

  return (
    <div className="container pt-20 w-[85%] mx-auto rounded-2xl">

      {/* Recipe Name for small devices */}
      <motion.div  
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative md:hidden"
      >
        <h1 className="relative z-10 md:text-5xl text-center mb-5   md:my-0 text-2xl font-bold uppercase text-[#60792C] italic">
          {meal.strMeal}
        </h1>
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 264 38" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M183.848 2.27956C174.614 1.94961 166.846 1.63291 162.838 1.40037C154.92 0.94101 136.12 0.764791 121.059 1.01294C109.481 1.20228 90.5007 1.8432 73.2679 2.54123C68.4549 2.3917 63.5801 2.22387 58.7765 2.04014C15.8637 0.399001 10.3551 0.443741 8.14842 2.45134C5.86242 4.53228 5.85086 4.71244 7.99758 4.81356C8.58652 4.84127 9.18882 4.97968 9.70248 5.18455C8.73895 5.46017 8.17827 5.79931 7.75093 6.21239C7.65567 6.30453 7.56449 6.39307 7.47737 6.47812C4.17791 5.84523 3.69492 6.16262 4.18986 8.49896C4.30075 9.02232 4.28037 9.62251 4.15254 10.2351C3.82712 10.4382 3.73054 10.8075 3.79032 11.3881C3.45508 12.1849 2.958 12.9326 2.35399 13.4822C0.101451 15.5316 0.16013 15.7107 3.18111 16.0077L3.3239 16.0216C3.04384 16.5446 2.69471 17.0247 2.29261 17.4134C0.103057 19.5299 0.167116 19.7072 3.19574 19.9127C4.9886 20.0343 6.90705 20.0744 7.45889 20.002C7.91657 19.9419 9.45505 20.9926 11.1321 22.4697C9.82386 22.6324 10.26 22.9259 12.1056 23.6509C12.305 23.7293 12.5003 23.8127 12.6908 23.9004C13.58 24.6772 14.5248 25.3149 15.5249 25.8135C16.5527 26.8568 16.7244 27.7926 15.4033 27.8167C11.5445 27.887 16.2634 30.527 25.1955 33.2948C34.9141 36.3064 35.4596 36.3177 83.1147 34.5017C93.2672 34.1148 103.707 33.6445 113.187 33.1602C118.502 33.4596 124.935 33.7455 131.513 33.9752C136.506 34.2985 141.57 34.5908 146.28 34.8207C174.055 36.1794 243.491 37.7652 234.252 36.8298C226.392 36.034 230.512 34.7254 242.976 34.0595C249.401 33.7162 254.909 32.7861 255.216 31.9927C255.522 31.1993 257.481 30.6307 259.568 30.7289C262.392 30.862 263.395 30.2088 263.491 28.1728C263.527 27.3963 263.375 26.7784 262.959 26.2636C263.505 25.8403 263.738 25.1761 263.754 24.203C263.785 22.3612 262.781 21.4419 259.738 20.7348C261.077 20.7189 261.379 20.5813 260.802 20.203C261.231 19.8782 261.184 19.2177 260.871 18.0767C260.764 17.6885 260.727 17.252 260.752 16.7953C261.225 16.7072 261.225 16.5569 260.801 16.3034C260.973 15.1064 261.531 13.8425 262.336 12.9851C264.395 10.7941 264.326 10.6192 261.37 10.5185C259.751 10.4634 258.029 10.4817 257.358 10.5573C256.91 10.0437 255.678 9.31295 253.819 8.45736C253.389 8.10325 252.946 7.7188 252.506 7.3152C250.015 5.03065 247.122 3.89301 243.832 3.9042C243.097 3.90671 242.146 3.90082 241.007 3.88738C234.251 2.1704 226.041 2.17069 186.913 2.26973C185.894 2.27231 184.872 2.27559 183.848 2.27956ZM23.2979 8.58194C23.1348 8.60903 22.9733 8.63637 22.8134 8.66398C22.4224 8.57452 22.0339 8.4813 21.6493 8.38455C22.2021 8.44605 22.7526 8.51203 23.2979 8.58194ZM13.04 4.62852C13.9186 4.54186 14.9448 4.46826 16.1495 4.40649C13.9349 4.24191 12.9808 4.28383 13.04 4.62852Z" fill="#F1E7D8" /> </svg>
      </motion.div>

      {/* Recipe main section */}
      <div className="recipeHead flex justify-between flex-wrap md:flex-nowrap">
        {/* Left column - Image & Ingredients */}
        <div className="md:w-1/4 md:pb-10 pb-5   bg-[#f1e7d8]  w-full flex  gap-5 md:gap-0 flex-row-reverse md:flex-col  shadow-lg md:items-center p-3">
          
          <motion.div  
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='md:flex md:justify-center mt-16 md:mt-0 w-full   '
          >
            <Image src={meal.strMealThumb} alt={meal.strMeal} width={384} height={176} className='md:w-96 md:h-44 w-48 object-contain rounded-2xl'/>
          </motion.div>

          <div className='ingriendents md:ms-10 ms-5 mt-5 '>
            <h3 className='md:text-2xl text-xl font-bold mb-3 uppercase'>Ingredients:</h3>
            <ul className='list-disc list-inside'>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                const ingredient = meal[`strIngredient${i}`]; 
                const measure = meal[`strMeasure${i}`];
                return ingredient ? (
                  <li className='text-sm' key={i}>{ingredient} - {measure}</li>
                ) : null;
              })}
            </ul>
          </div>
        </div>

        {/* Right column - Instructions */}
        <div className="md:w-3/4 w-full md:px-20  bg-[#f1e7d8]  md:bg-transparent rounded-t-none rounded-lg   px-5  md:pt-0 shadow-lg md:shadow-none shadow-amber-50">
          
          {/* Recipe Name for large devices */}
          <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="md:relative md:inline-block hidden">
            <h1 className="relative z-10 text-5xl font-bold uppercase p-2 text-[#60792C] italic">{meal.strMeal}</h1>
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 264 38" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M183.848 2.27956C174.614 1.94961 166.846 1.63291 162.838 1.40037C154.92 0.94101 136.12 0.764791 121.059 1.01294C109.481 1.20228 90.5007 1.8432 73.2679 2.54123C68.4549 2.3917 63.5801 2.22387 58.7765 2.04014C15.8637 0.399001 10.3551 0.443741 8.14842 2.45134C5.86242 4.53228 5.85086 4.71244 7.99758 4.81356C8.58652 4.84127 9.18882 4.97968 9.70248 5.18455C8.73895 5.46017 8.17827 5.79931 7.75093 6.21239C7.65567 6.30453 7.56449 6.39307 7.47737 6.47812C4.17791 5.84523 3.69492 6.16262 4.18986 8.49896C4.30075 9.02232 4.28037 9.62251 4.15254 10.2351C3.82712 10.4382 3.73054 10.8075 3.79032 11.3881C3.45508 12.1849 2.958 12.9326 2.35399 13.4822C0.101451 15.5316 0.16013 15.7107 3.18111 16.0077L3.3239 16.0216C3.04384 16.5446 2.69471 17.0247 2.29261 17.4134C0.103057 19.5299 0.167116 19.7072 3.19574 19.9127C4.9886 20.0343 6.90705 20.0744 7.45889 20.002C7.91657 19.9419 9.45505 20.9926 11.1321 22.4697C9.82386 22.6324 10.26 22.9259 12.1056 23.6509C12.305 23.7293 12.5003 23.8127 12.6908 23.9004C13.58 24.6772 14.5248 25.3149 15.5249 25.8135C16.5527 26.8568 16.7244 27.7926 15.4033 27.8167C11.5445 27.887 16.2634 30.527 25.1955 33.2948C34.9141 36.3064 35.4596 36.3177 83.1147 34.5017C93.2672 34.1148 103.707 33.6445 113.187 33.1602C118.502 33.4596 124.935 33.7455 131.513 33.9752C136.506 34.2985 141.57 34.5908 146.28 34.8207C174.055 36.1794 243.491 37.7652 234.252 36.8298C226.392 36.034 230.512 34.7254 242.976 34.0595C249.401 33.7162 254.909 32.7861 255.216 31.9927C255.522 31.1993 257.481 30.6307 259.568 30.7289C262.392 30.862 263.395 30.2088 263.491 28.1728C263.527 27.3963 263.375 26.7784 262.959 26.2636C263.505 25.8403 263.738 25.1761 263.754 24.203C263.785 22.3612 262.781 21.4419 259.738 20.7348C261.077 20.7189 261.379 20.5813 260.802 20.203C261.231 19.8782 261.184 19.2177 260.871 18.0767C260.764 17.6885 260.727 17.252 260.752 16.7953C261.225 16.7072 261.225 16.5569 260.801 16.3034C260.973 15.1064 261.531 13.8425 262.336 12.9851C264.395 10.7941 264.326 10.6192 261.37 10.5185C259.751 10.4634 258.029 10.4817 257.358 10.5573C256.91 10.0437 255.678 9.31295 253.819 8.45736C253.389 8.10325 252.946 7.7188 252.506 7.3152C250.015 5.03065 247.122 3.89301 243.832 3.9042C243.097 3.90671 242.146 3.90082 241.007 3.88738C234.251 2.1704 226.041 2.17069 186.913 2.26973C185.894 2.27231 184.872 2.27559 183.848 2.27956ZM23.2979 8.58194C23.1348 8.60903 22.9733 8.63637 22.8134 8.66398C22.4224 8.57452 22.0339 8.4813 21.6493 8.38455C22.2021 8.44605 22.7526 8.51203 23.2979 8.58194ZM13.04 4.62852C13.9186 4.54186 14.9448 4.46826 16.1495 4.40649C13.9349 4.24191 12.9808 4.28383 13.04 4.62852Z" fill="#F1E7D8" /> </svg>
          </motion.div>

          <div className='mt-5 flex gap-5'>
            <h3 className='md:text-3xl text-xl font-bold italic md:py-5 md:text-[#f1e7d8]'>Preparation:</h3>
            <Lottie animationData={cookingAnimation} className='md:w-20 md:h-20 w-10 h-10'/>
          </div>

          <motion.div whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.5, opacity: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
  <ol className="list-decimal   [&>li::marker]:text-lg [&>li::marker]:font-bold   pb-3    list-inside space-y-2 text-justify text-[9px]  md:text-[13px]   md:text-gray-300 pe-10">
  {meal.strInstructions
 .split(/\d+\./g)
  .map((p: string) => p.trim())           
  .filter(Boolean)
  .map((part: string, i: number) => (    
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
    
    key={i} className="leading-relaxed">
      {part}
    </motion.li>
  ))}
  </ol>          </motion.div>

          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className='bg-[#f1e7d8] mt-10 rounded-md text-[#60792C] font-semibold px-5'>Watch on YouTube</a>
        </div>
      </div>

      {/* Decorative chef image */}
      <div className='chefImg flex justify-end -translate-y-10 mx-auto'>
        <Image src="https://i.ibb.co/Hpxvx6kc/chef.png" alt="chef image" width={150} height={150} className='-rotate-12 opacity-5 me-0'/>
      </div>
    </div>
  )
}

// Export default wrapped in Suspense
export default function RecipePage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center">Loading recipe...</div>}>
      <RecipeContent />
    </Suspense>
  )
}
