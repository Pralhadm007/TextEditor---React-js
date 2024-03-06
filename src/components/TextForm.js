import React from "react";
import PropTypes from "prop-types"
export default function TextForm(props) {
  return (
    <div>
      
      <div className="mb-3">
        <h1>{props.Headline}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary">Convert to Uppercase</button>
      </div>
    </div>
  );
}

TextForm.propTypes = {
    Headline: PropTypes.string.isRequired
};
TextForm.defaultProps = {
    Headline : "Set Headline here"
};

  
  
