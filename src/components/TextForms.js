//lecture->7                handling event and state

import React, { useState } from "react"; //we mported useState hook from react...{useState} is called hook

export default function TextForms(props) {
  const [text, setText] = useState("Enter your text here"); //always use this in function component

  //---------------------------------------------------------------------------------------------------------------------------
  //8:52 (lec->7)
  //above syntax mean that...there is a state variable called text will have default value 'Enter your text here' and whenever i want to update
  //text variable i will use setText function

  // Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

  //hooks allows you to use class featers without class
  //------------------------------------------------------------------------------------------------------------------------------
  //how to update text ???
  // text = "something"  -> wrong way to change text
  // setText("something"); -> correct way to change text

  //setText will update value without reloading page
  //-------------------------------------------------------------------------------------------------------------------------------

  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("lower was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  // [ ]+ is used to match one or more spaces in the text. This means that the text will be split at any occurrence of one or more consecutive spaces.
  //For example, if text is "Hello World", then text.split(/[ ]+/) would result in an array with two elements: ["Hello", "World"].
  
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              //here first curly brace is to write javascript and 2nd curly brace is for javascript object (14:33 lect->12 )
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          {/* while writing into textbox onChange event will be executed.if  we dont use onChange event we wont be able to write anything in textbox*/}
        </div>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={
            handleUpClick
          } /*this function will be invoked while clicking button*/
        >
          Convert To Uppercase
        </button>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={
            handleLoClick
          } /*this function will be invoked while clicking button*/
        >
          Convert To lower case
        </button>

        <button
          className="btn btn-primary my-2 mx-2"
          onClick={
            handleExtraSpaces
          } /*this function will be invoked while clicking button*/
        >
          Remove extra space
        </button>

        <button
          className="btn btn-primary"
          onClick={
            handleClearClick
          } /*this function will be invoked while clicking button*/
        >
          Clear text
        </button>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").filter((element)=>{return element.length!==0}).length} words and{" "}
            {text.length} characters
          </p>
          <p>{0.08 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview"}</p>{" "}
          {/* this.text is class based */}
        </div>
      </div>
    </>
  );
}

//note : whenever we write javascript we have to write it in { } to tell react that i am writing javascript....for ex {props.heading} , {text.length}...etc
