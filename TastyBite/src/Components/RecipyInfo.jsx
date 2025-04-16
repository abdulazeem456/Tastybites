import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipyInfo = () => {
  const { id } = useParams();
  const [idmeal, setIdmeal] = useState(null);

  const getid = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      console.log(data, 'data123');
      setIdmeal(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    

    getid();
  }, [id]); // runs when `id` changes

  return (
    <>
      {!idmeal ? (
        'Loading...'
      ) : (
        <div className="hero bg-base-200 min-h-screen overflow-x-hidden">
          <div className="hero-content flex flex-col sm:flex-col lg:flex-row items-center gap-6 px-4">
            <img
              src={idmeal.image}
              alt={idmeal.name}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
            />
            <div className='flex flex-col '> 
              <button className="btn btn-primary">{idmeal.name}</button>
              <h1 className="text-xl font-bold ">FOOD TYPE: {idmeal.mealType.map((items =>{
                return <span key={items}>{items}, </span>
              }))}</h1>
              <h2 className="text-xl font-bold">FOOD RECIPE & INSTRUCTIONS: </h2>
              <div className="py-6 ">{idmeal.instructions.map((int, index) =>{
                return(<>
                  <p key={index} >

                    {index + 1}. {int} 
                  </p>
                </>

                )
              })}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipyInfo;
