import React, { useEffect } from 'react'
import Recipycard from '../Card/Recipycard'
import { Link } from 'react-router-dom'

const Home = () => {
  const [meal, setMeal] = React.useState([])
  const [filterData, setFilterData] = React.useState([])

  const Apifun = async () => {
    const response = await fetch(`https://dummyjson.com/recipes`)
    // const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

    const deta = await response.json()
    console.log(deta,'data')
    setMeal(deta.recipes)
    // setRanData(deta.meals.strMeal= 'g')
  }

 
  useEffect(() => {
   
    Apifun()
    if(meal.length>0){
      setFilterData(meal.filter((item) => item.id < 5))
    }
  }, [meal])

  return (
    <>
     <div className="hero bg-[url('/src/assets/img/hero.jpg')] min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-amber-100">Hello Foodie</h1>
        <p className="py-6 ">
        Life's too short to eat bad food, savor every bite, and embrace the culinary adventure!
        A foodie's heart beats for flavor, from the first taste to the last, a true celebration of food.
        </p>
        <Link to={'RecipyList'}>
        <button className="btn btn-primary">Go to RecipyList</button>
        </Link>
      </div>
    </div>
  </div>
  <div className="font-bold text-4xl justify-center items-center h-15">
    {/* center h1 */}
    <h1 className="text-center py-1.5">India's Famous Food</h1>
    
  </div>
  <div className="">
    <Recipycard meal={filterData}/>

  </div>

    </>
   
  
  )
}

export default Home