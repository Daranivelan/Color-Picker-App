import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FF0000");

  function colorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="myH1">Color Picker</h1>
      <hr></hr>
      <div className="display" style={{ backgroundColor: color }}></div>
      <p>Selected Color: {color}</p>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={colorChange}></input>
    </div>
  );
}
