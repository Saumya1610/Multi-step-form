import React from 'react';

const Button = (props) => {
  return (
    <div className="flex justify-center p-3">
      <button className="bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none " onClick={props.handleClick}>
        Continue
      </button>
    </div>
  );
}

export default Button;
