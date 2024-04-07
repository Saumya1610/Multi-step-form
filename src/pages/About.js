import React from "react";
import Header from "../components/Header";
import Option from "../components/Option";
import Button from "../components/Button";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-3">
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
      </div>
      <Button />
    </>
  );
}
