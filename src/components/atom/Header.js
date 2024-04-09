import React from 'react';

const Header = (props) => {
  console.log(props)
  return (
    <div className=" flex flex-col justify-top items-center ">
      <div className="max-w-7xl w-full p-4 text-center">
        <h1 className="text-xl font-bold text-stone-700 mb-4">{props.heading}</h1>
        <p className="text-base text-gray-700">{props.desc}</p>
      </div>
    </div>
  );
}

export default Header;
