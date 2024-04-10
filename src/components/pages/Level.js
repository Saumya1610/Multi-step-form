import React from "react";
import Header from "../atom/Header";
import Option from "../atom/Option";
import Arithmetic from "../../images/arithmetic.png";
import Algebra from "../../images/algebra.png";
import AlgebraSecond from "../../images/algebra-2.png";
import Calculus from "../../images/calculus.png";

export default function Level() {
  const main = {
    heading: "What is your math comfort level?",
    desc: "Choose the highest level you feel confident in - you can always adjust later."
  };

  const data = [
    {
      img: Arithmetic,
      alt: "Arithmetic",
      heading: "Arithmetic",
      para: "Introductory"
    },
    {
      img: Algebra,
      alt: "Basic Algebra",
      heading: "Basic Algebra",
      para: "Foundational"
    },
    {
      img: AlgebraSecond,
      alt: "Intermediate Algebra",
      heading: "Intermediate Algebra",
      para: "Intermediate"
    },
    {
      img: Calculus,
      alt: "Calculus",
      heading: "Calculus",
      para: "Advanced"
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center">
      <header>
        <Header heading={main.heading} desc={main.desc} />
      </header>
      <div className="w-full flex gap-1">
        {data.map((item, index) => (
          <Option
            key={index}
            img={item.img}
            alt={item.alt}
            heading={item.heading}
            para={item.para}
            direction="col"
          />
        ))}
      </div>
    </section>
  );
}
