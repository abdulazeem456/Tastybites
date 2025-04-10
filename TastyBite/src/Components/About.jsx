import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url('/src/assets/img/about.jpg')",
    }}>
    <div className="hero-overlay"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello Users</h1>
        <h1 className="mb-5 text-xl">
        <span className='text-cyan-500'> TastyBite</span> is recipe project build on reactjs using Tailwind css and 
        DaisyUi that serves user a wide range of popular recipes from around the globe using DummyJSON
        API. get code here
        </h1>
        <Link to={'/'}
        className="btn btn-primary">Go To Home
        </Link>
        {/* <button className="btn btn-primary" >Go To Home</button> */}
      </div>
    </div>
  </div>
  )
}

export default About