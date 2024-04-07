import React from "react";
import Header from "./components/Header";
import Option from "./components/Option";
import Button from "./components/Button";


function App() {
  return (
    <div className="p-8">
    <div className="flex gap-2 items-center">
    <ion-icon name="chevron-back-outline"></ion-icon>
    <progress className="w-[90%] h-1 flex justify-center items-center" value={0.2} />
    </div>
   <Header/>
   <div className="flex flex-col gap-3">
    <Option/>
    <Option/>
    <Option/>
    <Option/>
    <Option/>
   </div>
   <Button/>
    </div>
  );
}

export default App;
