import React from 'react';

const Option = (props) => {
  const { img, heading, para, direction } = props;
  const isColumn = direction === "col";

  return (
    <div className="flex flex-col items-center">
      <div className={`flex ${isColumn ? 'flex-col' : ''} ${isColumn ? 'gap-y-4' : 'gap-1'} border w-[50%] border-black text-center items-center p-2`}>
        <img src={img} alt={heading} className={`${isColumn ? 'w-full h-auto' : 'w-12 h-12'}`} />
        <p className={`font-bold ${isColumn ? 'max-w-[150px]' : ''}`}>{heading}</p>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Option;
