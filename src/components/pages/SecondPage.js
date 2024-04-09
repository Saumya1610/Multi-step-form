import React from "react";
import Header from "../atom/Header";
import Button from "../atom/Button";
import Alien from "../../images/alien.png"
export default function FirstPage() {
  const main =[{
    main:"You're on your way!",
    desc:'"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations." - Jacob S.'
  } 
  ]
   
  return (
    <div className="">
    <div className="flex justify-evenly items-center py-4">
    <img  src={Alien} alt="Pulley" className='' />
    {
      main.map((item,index) => (
        <Header key={index} heading ={item.main} desc={item.desc} className=""/>
      ))
    }
     </div>
     <div>
      <Button />
    </div>
    </div>
  );
}







