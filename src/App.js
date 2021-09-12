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
      <h1 style={{'marginTop':'3rem'}}>Emoji Dictionary</h1>
      <input  type="text" onChange={changeHandler} placeholder={"put your emoji here"} 
      style={{
              'marginTop':'3rem',
              'width':'60%',
              'height':'50px'
       }} />
      
          <h2 style={{
            
            'backgroundColor':'white',
            'border':'1px solid black',
            'width':"40%",
            'maxHeight':'30%',
            'margin':'auto',
            'marginTop':'3rem',
            'marginBottom':'3rem',
        }}>
          {`Meaning: ${name}`}
          </h2>


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
