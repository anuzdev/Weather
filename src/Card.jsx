import React from "react";

export const Card = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Search weather for your City</p>;
  }

  return (
    <>
      <div className="bg-yellow-500 rounded-xl p-2 w-2xl h-full">
        <div className="bg-red-500 justify-center text-center">
          City Location: {weatherData.location}
        </div>

        <div className="flex justify-center">
          <div className="bg-blue-500 m-5 p-4 w-fit align-super">
            humidity: {weatherData.humidity}
          </div>
          <div className="w-fit bg-amber-950 m-5 p-4 ">
            Temperature: {weatherData.temperature}
          </div>
          <div className="bg-green-500 w-fit m-5 p-4">
            Wind: {weatherData.windSpeed}
          </div>
        </div>
      </div>
    </>
  );
};
