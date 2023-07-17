import React, { useState } from "react";

export default function Text(prop) {
  const convertUpp = () => {
    setText(text.toUpperCase())
    prop.showalert("Capitalized Successfully","success")
  };
  const convertLow = () => {
    setText(text.toLowerCase());
    prop.showalert("Lowercased Successfully","success")
  };
  const clear = () => {
    let newtext = "";
    setText(newtext);
    prop.showalert("Cleared","warning")
  };

  const Copy = () => {
    navigator.clipboard.writeText(text);
    prop.showalert("Copied","success")
  };
  const Capitalise = () => {
    let n = text.length;
    setText(text.slice(0, 1).toUpperCase() + text.slice(1, n));
    prop.showalert("Capitalized Case","success")


  };

  const addText = (newtext) => {
    setText(newtext.target.value);
    // console.log(text);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: prop.mode==='light'?'Black':'white'}}>
        <h1>{prop.heading} </h1>
        <div className="my-5">
          <textarea
            className="form-control"
            value={text}
            onChange={addText}
            id="exampleFormControlTextarea1"
            rows="7"
            style={{backgroundColor: prop.mode==='light'?'white':'#383838', color: prop.mode==='light'?'Black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-5" onClick={convertUpp}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={convertLow}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 " onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 " onClick={Copy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 " onClick={Capitalise}>
          Capitalized case
        </button>
      </div>
    </>
  );
}
