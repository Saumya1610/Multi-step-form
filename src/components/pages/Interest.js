import React from "react";
import Header from "../atom/Header";
import Option from "../atom/Option";
import Button from "../atom/Button";
import Graph from "../../images/graph.png"
import Globe from "../../images/globe.png";
import Compass from "../../images/compass.png";
import Target from "../../images/target.png";
import Eyes from "../../images/eyes.png";
export default function About() {
  const main =[{
    main:"Which are you most interested in",
    desc:"Chose just one. This will help us get you started (but won't limit your experience)."
  } 
  ]
  const data = [
    {
      img: Graph,
      para: "Learning specific skills to advance my career"
    },
    {
      img: Globe,
      para: "Exploring new topics I'm interested in"
    },
    {
      img: Compass,
      para: "Refreshing my math foundations"
    },
    {
      img: Target,
      para: "Exercising my brain to stay sharp"
    },
    {
      img: Eyes,
      para: "Something else"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center">
    {
      main.map((item,index) => (
        <Header key={index} heading ={item.main} desc={item.desc}/>
      ))
    }
      
      <div className="w-full flex flex-col gap-3">
        {data.map((item, index) => (
          <Option
            key={index}
            img={item.img}
            para={item.para}
          />
        ))}
      </div>
      <Button />
    </div>
  );
}

