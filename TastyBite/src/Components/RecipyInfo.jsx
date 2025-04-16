import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipyInfo = () => {
  const { id } = useParams();
  const [ideal, setideal] = useState(null);

  const getid = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      console.log(data, "data123");
      setideal(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getid();
  }, [id]); // runs when `id` changes

  return (
    <>
      {!ideal ? (
        "Loading..."
      ) : (
        <div className="hero bg-base-200 min-h-screen overflow-x-hidden">
          <div className="hero-content flex flex-col sm:flex-col lg:flex-row items-start gap-4 px-4">
            <img
              src={ideal.image}
              alt={ideal.name}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
            />
            <div className="flex flex-col ">
              {/* <button className="btn btn-primary mb-4">{ideal.name}</button> */}
              <h2 className="text-3xl  text-start font-bold">{ideal?.name}</h2>
              <p className="text-sm my-2">
                Food Type :{" "}
                {ideal?.mealType?.map((items) => {
                  return <span key={items}>{items}, </span>;
                })}
              </p>
              <p className="text-md">Instructions: </p>
              <div className=" ">
                {ideal.instructions.map((int, index) => {
                  return (
                    <>
                      <p key={index} className="text-sm  my-2">
                        Step{index + 1}. {int}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipyInfo;
