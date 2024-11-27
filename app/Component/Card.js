import React from "react";

const Card = () => {
  console.log("Here"); // This should log an object with `div` and other components
  return (
    <div className="card md:min-h-[20vh] min-h-[20vh] rounded-2xl border-2 border-background flex flex-col justify-center items-center" >
      <h1>Hi</h1>
    </div>
  );
};

export default Card;
