import React from "react";

function skeletoncard() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4 "> */}
      <div className="flex flex-wrap justify-center  items-center gap-9 py-4">
        {arr.map((x) => {
          return (
            <div className="flex w-70 flex-col relative gap-4 my-4" key={x}>
              <div className="skeleton h-60 w-54"></div>
              {/* <div className="flex justify-around my-2"> */}
              <div className="skeleton h-4  w-54"></div>
              <div className="skeleton h-4  w-54"></div>
              {/* </div> */}
              <div className="flex justify-around ">
                <div className="skeleton h-12 rounded-full me-20 w-32 "></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default skeletoncard;
