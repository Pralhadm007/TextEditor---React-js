
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar Title="TextEditor" About="AboutText" Home="Home" />
      <div className="container my-3">
      <TextForm Headline="Enter the Text to analyze below"/>
      </div>
    </>
  );
}

export default App;
