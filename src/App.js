
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
      const [mode, setMode] = useState('light');
      const toggleMode = ()=>{
        if(mode==='dark')
        {
          setMode('light');
          document.body.style.backgroundColor = 'white';
        }
        else{
          setMode('dark');
          document.body.style.backgroundColor = 'grey';
        }
      }
  return (
    < >
      <Navbar Title="TextEditor" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <TextForm Headline="Enter the Text to analyze below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
