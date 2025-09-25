'use client'
import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'

export default function HomeDash({ params }: { params: Promise<{ id: string }> }){
  const { id } = use(params)

  const [meals, setMeals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function getCategoryMeals(category: string) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      )
      if (!res.ok) throw new Error('Failed to fetch meals')

      const data = await res.json()

      if (!data.meals) {
        setMeals([])
        setError('No meals found for this category')
      } else {
        setMeals(data.meals)
        setError(null)
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      setLoading(true)
      setError(null)
      getCategoryMeals(id)
    }
  }, [id])

  // 🔹 Loading 
  if (loading) {
    return (
      <div className="h-screen w-full flex  justify-center    items-center">
       <span className="loader"></span>
      </div>
    )
  }

  // 🔹 Error 
  if (error) {
    return (
      <div className="h-screen w-full flex justify-center items-center text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  // 🔹 display data
  return (
    <div className="font-bold w-full text-lg h-1/2 max-h-[700px] scrollbar-hide overflow-y-auto rounded-lg p-3">
      <div className="flex mealDisplay gap-3 justify-evenly flex-wrap">
        {meals.map((item) => (
          <Link key={item.idMeal} href={`/recipe?q=${item.idMeal}`}>
            <div className="md:w-50 w-24 bg-[#394050] p-2 rounded-lg shadow-md overflow-hidden">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-fit object-cover rounded-lg"
              />
              <h3 className="py-2 text-white text-sm font-light">
                {item.strMeal}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
