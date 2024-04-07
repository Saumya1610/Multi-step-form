import React from 'react';
import studentImage from '../../src/images/student.png'; // Import the image

const Option = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex gap-1 border w-[50%] border-black  text-center items-center p-2">
        <img src={studentImage} alt='student'/> 
        <p className='font-base'>
          <span className='font-bold'>Student </span>
          or soon to be enrolled
        </p>
      </div>
    </div>
  );
}

export default Option;
