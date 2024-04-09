import React from "react";
import Header from "../atom/Header";
import Button from "../atom/Button";
import Pulley from "../../images/pulley.png"
export default function FirstPage() {
  const main =[{
    main:"You're in the right place",
    desc:"Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science."
  } 
  ]
   
  return (
    <div className="">
    <div className="flex justify-evenly items-center py-4">
    <img  src={Pulley} alt="Pulley" className='' />
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







