import { emojiDictionary } from "./emojis";
import React, { useState } from "react";
import './App.css';







function App() {

const emojis=Object.keys(emojiDictionary)
const[emoji,setEmoji]=useState("")
const[name,setName]=useState("emoji name")

function changeHandler(e){
  const input=e.target.value;
  setEmoji(input)
  if(input in emojiDictionary){
    setName(emojiDictionary[input])
  } else {
    setName('emoji not found')
  }
}

function clickHandler(input) {
  setName(emojiDictionary[input]);
}

  return (


    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input  type="text" onChange={changeHandler} placeholder={"put your emoji here"} style={{"width":"30vh","height":"7vh"}} />
      <div style={{"border": "1px solid black","backgroundColor":"white","height":"10vh","width":"40vh","marginTop":"3%","marginLeft":"40%","marginBottom":"5%" }}>
          <h2>{`Meaning: ${name}`}</h2>
      </div>


      {
         emojis.map((emoji) => (
          <span onClick={() => clickHandler(emoji)} style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}>
            {emoji}
          </span>
        ))
      }

    </div>
  );
}

export default App;
