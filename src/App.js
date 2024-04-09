import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Interest from './components/pages/Interest';
import About from "../src/components/pages/About"
import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";
import Button from "./components/atom/Button";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const ProgressBar = () => {
    return (
      <div className="flex gap-2 items-center justify-center">
      <FontAwesomeIcon icon={faChevronLeft} onClick={prevStep}/>
        <progress
        max="4"
          className="w-[90%] h-1 flex justify-center items-center"
          value={step}
        />
      </div>
    );
  };
  const Step1 = () => {
    return (
      <div>
        <About/>
        <Button handleClick={nextStep}/>
      </div>
    );
  };
  const Step2 = () => {
    return (
      <div>
         <Interest/>
        <Button handleClick={nextStep}/>
      </div>
    );
  };
  const Step3 = () => {
    return (
      <div>
         <FirstPage/>
        <Button handleClick={nextStep}/>
      </div>
    );
  };
  const Step4 = () => {
    return (
      <div>
          <SecondPage/>
        <Button handleClick={submitForm}/>
      </div>
    );
  };

  const submitForm = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div className="h-screen p-4">
      <ProgressBar />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </div>
  );
};



export default App;
