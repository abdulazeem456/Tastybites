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
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={idmeal.image}
              alt={idmeal.name}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <button className="btn btn-primary">{idmeal.name}</button>
              <h1 className="text-2xl font-bold ">FOOD TYPE: {idmeal.mealType.map((items =>{
                return <span key={items}>{items}, </span>
              }))}</h1>
              <h2 className="text-2xl font-bold">FOOD RECIPE & INSTRUCTIONS: </h2>
              <p className="py-6">{idmeal.instructions.map((int, index) =>{
                return(<>
                  <p key={index} >

                    {index + 1}. {int} 
                  </p>
                </>

                )
              })}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipyInfo;
