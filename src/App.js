import React from "react";
import About from "./pages/About";

function App() {
  return (
    <div className="p-4">
      <div className="flex gap-2 items-center">
        <ion-icon name="chevron-back-outline"></ion-icon>
        <progress
          className="w-[90%] h-1 flex justify-center items-center"
          value={0.2}
        />
      </div>
      <About/>
    </div>
  );
}

export default App;
