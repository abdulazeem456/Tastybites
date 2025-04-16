import React from 'react';
import { NavLink } from 'react-router-dom';

const Recipycard = ({ meal }) => {
  // console.log(details, 'details');

  return (
    <>
      <div className="flex flex-wrap justify-center  items-center gap-9 ">
        {!meal || meal.lenght == 0 ? (
          <div className="text-3xl text-black">No data found</div>
        ) : (
          meal.map((item, index) => (
            <div key={index} className="card  overflow-hidden rounded-2xl  w-70 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-auto w-72">
            <figure>
                <img 
                  src={item.image}
                  alt="Food"
                  className='w-full h-70'
                />
              </figure>
            </div>
              <div className="card-body bg-white text-black overflow-hidden items-center text-center gap-2.5">
                <h2 className="card-title text-nowrap text-sm  uppercase ">{item.name}</h2>
                <div className="card-actions justify-end">
                  <NavLink to={`/${item.id}`}>
                  <button className="btn btn-primary pl-8 pr-8 rounded-3xl">Recipy</button>
                  </NavLink>
                 
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Recipycard;
