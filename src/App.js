import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import Interest from './components/pages/Interest';
import About from "../src/components/pages/About"
import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";


function App() {
  return (
    <div className="h-screen p-4">
      <div className="flex gap-2 items-center justify-center">
      <FontAwesomeIcon icon={faChevronLeft} />
        <progress
          className="w-[90%] h-1 flex justify-center items-center"
          value={0.2}
        />
      </div>
      <About/>
      <Interest/>
      <FirstPage/>
      <SecondPage/>
    </div>
  );
}

export default App;
