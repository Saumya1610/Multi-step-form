import React from 'react';

const Header = () => {
  return (
    <div className=" flex flex-col justify-top items-center ">
      <div className="max-w-7xl w-full p-8 text-center">
        <h1 className="text-xl font-bold text-stone-700 mb-4">What describes you best?</h1>
        <p className="text-base text-gray-700"> This will help us personalize your experience.</p>
      </div>
    </div>
  );
}

export default Header;
