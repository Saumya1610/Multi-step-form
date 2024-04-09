import React from 'react';

const Option = (props) => {
  console.log(props.img)
  return (
    <div className="flex flex-col items-center ">
      <div className="flex gap-1 border w-[50%] border-black text-center items-center p-2">
        <img src={props.img} alt={props.heading} className='w-12 h-12'/>
        <p className='font-base'>
          <b>{props.heading}</b>
          {props.para}
        </p>
      </div>
    </div>
  );
}

export default Option;