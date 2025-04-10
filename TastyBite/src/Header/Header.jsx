import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Header = () => {
  return (
   <>
   {/* <h1>header lines</h1> */}
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-amber-100 border-gray-200 px-4 lg:px-6 py-2.5">
     <div className="grid grid-cols-3 items-center justify-between mx-auto max-w-screen-xl">
      <Link to="/" className="flex items-center">
        {/* <img src="https://dcassetcdn.com/design_img/500681/114329/114329_3648251_500681_image.jpg" className="h-8 mr-3" alt=" Logo" /> */}
        <span className="self-center text-3xl font-semibold whitespace-nowrap text-cyan-700 ">TastyBite</span>
      </Link>
      <div className="items-center hidden justify-between  w-full md:flex md:w-auto" id="navbar-default">
        <ul className='flex flex-row justify-center mr-130 gap-20.5 items-center p-4    '>
            <li>
            <NavLink
                      to={'/'}
                         className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ?'text-orange-500'
                          :'text-gray-700'} border-b border-gray-100 hover:bg-gray-50
                           lg:hover:bg-transparent lg:border-0
                             hover:text-orange-700 lg:p-0`  }
                                >
                 Home
             </NavLink>
            </li>
            <li>
            <NavLink
                      to={'RecipyList'}
                         className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ?'text-orange-500'
                          :'text-gray-700'} border-b border-gray-100 hover:bg-gray-50
                           lg:hover:bg-transparent lg:border-0
                             hover:text-orange-700 lg:p-0`  }
                                >
                 RecipyList
             </NavLink>
            </li>
            <li>
            <NavLink
                      to={'about'}
                         className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ?'text-orange-500'
                          :'text-gray-700'} border-b border-gray-100 hover:bg-gray-50
                           lg:hover:bg-transparent lg:border-0
                             hover:text-orange-700 lg:p-0`  }
                                >
                 About
             </NavLink>
            </li>
        </ul>
        {/* make it img logo one */}

      </div>
     
      <div className="flex justify-end">
          <img src="src/assets/img/profile.png" alt="" width={50} className='rounded-full '/>
      </div>
     
     </div>
      </nav>
    </header>
   </>
  )
}

export default Header