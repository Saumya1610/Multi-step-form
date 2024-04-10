import React from "react";
import Header from "../atom/Header";
import Option from "../atom/Option";
import Button from "../atom/Button";
import Student from "../../images/student.png";
import Professional from "../../images/professional.png";
import Teacher from "../../images/teacher.png";
import Parent from "../../images/parent.png";
import Learner from "../../images/learner.png";
import Other from "../../images/other.png";

export default function About() {
  const main =[{
    main:"What describes you best?",
    desc:"This will help us personalize your experience."
  } 
  ]
  const data = [
    {
      img: Student,
      heading: "Student",
      para: "or soon to be enrolled"
    },
    {
      img: Professional,
      heading: "Professional",
      para: "pursuing a career"
    },
    {
      img: Parent,
      heading: "Parent",
      para: " of a school-age child"
    },
    {
      img: Learner,
      heading: "Lifelong learner"
    },
    {
      img: Teacher,
      heading: "Teacher"
    },
    {
      img: Other,
      heading: "Other"
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
            heading={item.heading}
            para={item.para}
            direction = "row"
          />
        ))}
      </div>
    </div>
  );
}

