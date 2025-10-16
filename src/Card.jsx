import React from "react";

export const Card = () => {
  return (
    <>
      <div className="bg-yellow-500 rounded-xl p-2 w-2xl h-full">
        <div className="bg-red-500 justify-center text-center">Weather</div>

        <div>
          <div className="bg-blue-500 m-5 p-4 w-fit">AQI</div>
          <div className="w-fit bg-amber-950">Hii</div>
        </div>
      </div>
    </>
  );
};
