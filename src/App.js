import "./styles.css";
import Form from "./Form";
import React, { useState } from "react";

export default function App() {
  var [formData, SetFormData] = useState({
    dob: 0,
    num: 0
  });
  var [isLucky, setIsLucky] = useState("");

  function handleForm(dob, num) {
    SetFormData({
      dob: dob,
      num: num
    });
    var sum = 0;
    console.log(dob);
    for (let char of String(dob)) {
      if (isNaN(char) === false) {
        sum += Number(char);
      }
    }
    if (sum % num === 0) {
      setIsLucky(num + " is a Lucky Number!");
    } else {
      setIsLucky(num + " is not that lucky :(");
    }
  }

  return (
    <div className="App">
      <Form handleForm={handleForm.bind(this)} />
      <br />
      <div className="result">{isLucky}</div>
    </div>
  );
}
