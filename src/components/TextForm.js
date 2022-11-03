import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  return (
    <>
      <div className="container my-3">
        <h3 className="mb-2">Try TextUtils - Word, Character Counter, Remove Extra Spaces</h3>
        <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} value={text} onChange={handleOnChange} id="textform" rows="15"></textarea>
        <div className="actions my-2">
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "light" : "dark"} m-2`} onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "light" : "dark"} m-2`} onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "light" : "dark"} m-2`} onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "light" : "dark"} m-2`} onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length === 0} className={`btn btn-${props.mode === "dark" ? "light" : "dark"} m-2`} onClick={handleClear}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container mb-3">
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h3>Preview</h3>
        <pre>
          {text.length > 0 ? text : "Nothing to preview"}
        </pre>
      </div>
    </>
  );
}
