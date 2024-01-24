import React from "react";
import "../Style/button.css";

function UpdateButton({updateValue, text1}) {
  console.log(updateValue)
  
  return (
    <button  className="text-md rounded-lg w-32 h-12 bg-green-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
      <span className="absolute bg-green-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
      <span className="absolute bg-green-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
     {text1}
    </button>
  );
}

export default UpdateButton;
