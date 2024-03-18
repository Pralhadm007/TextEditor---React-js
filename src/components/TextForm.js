import React, {useState} from "react";
import PropTypes from "prop-types"

export default function TextForm(props) {
const handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase!","success");
}
const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase!","success");
}
const handleClearClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = '';
  setText(newText);
  props.showAlert("Text Box Cleared!","success");
}
const handleCopyClick = ()=>{
  const textcp = document.getElementById("myBox");
  textcp.select();
  navigator.clipboard.writeText(textcp.value);
  props.showAlert("Text Copied to clipboard!","success");
}
const handleXtrspcClick = ()=>{
  let newTextl = text.split(/[ ]+/);
  setText(newTextl.join(" "));
  props.showAlert("Extra spaces removed!","success");
}
const handleOnChange = (event)=>{
  // console.log("onchange was clicked" + text);
  setText(event.target.value);
}
function countWords(text) {
  text = text.trim();
    if (text === '') {
      return 0;
    }
  const words = text.split(/\s+/);
  return words.length;
}
let style={
  backgroundColor:'grey'
}

const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3" >
        <h1>{props.Headline}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark' ? '#212529' : 'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"/><br/>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}> Copy Text </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleXtrspcClick}> Text Formatting </button>
      </div>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p> {countWords(text)} words and {text.length} characters</p>
      <p>{0.08 * countWords(text)} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    Headline: PropTypes.string.isRequired
};
TextForm.defaultProps = {
    Headline : "Set Headline here"
};

  
  
