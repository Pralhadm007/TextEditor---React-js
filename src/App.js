
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
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
          showAlert("Light mode has been enabled!", "success");
        }
        else{
          setMode('dark');
          document.body.style.backgroundColor = 'grey';
          showAlert("Dark mode has been enabled!", "success");
        }
      }

      const[alert,setAlert] = useState(null);
      const showAlert = (message, type)=>{
            setAlert({
              message : message,
              type : type
            });
        setTimeout(()=>{
          setAlert(null);
        },2000);
      }
  return (
    < >
      <Navbar Title="TextEditor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} Headline="Enter the Text to analyze below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
