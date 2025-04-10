import React from 'react'
import Recipycard from '../Card/Recipycard'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const RecipyList = () => {

  const [meal, setMeal] = React.useState([])
  const [search, setSearch] = React.useState('')
  // const [ranData, setRanData] = React.useState([])
  const Handelinput = (e) => {
    setSearch(e.target.value)

  }
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
    
  }, [search])
  
  return (
   <>
   <div className="w-full hidden justify-center items-center h-30 bg-green-100 ">
    <input type="text" 
    placeholder='Found your  meal' 
    className='border rounded-xl h-10 p-3.5 w-2xs text-black'
    onChange={Handelinput}/>
    <button className='text-black ml-2.5 border p-2 rounded-xl px-4.5 hover:bg-blue-300' 
    onClick={Apifun}>search</button>
   </div>

   <div className="w-full flex flex-col-4 justify-center items-center h-fit bg-amber-50 p-10">
      <Recipycard meal={meal}/>
    </div>
   </>
  )
}

export default RecipyList