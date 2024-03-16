import React, {useState} from "react";
import PropTypes from "prop-types"

export default function TextForm(props) {
const handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
}
const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
}
const handleClearClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = '';
  setText(newText);
}
const handleOnChange = (event)=>{
  // console.log("onchange was clicked" + text);
  setText(event.target.value);
}

const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.Headline}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"/><br/>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear </button>
      </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes to read</p>
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

  
  
