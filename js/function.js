// // ()=>{} //Arrow function

import { sum } from "./export.mjs";

// {},
// [],
// ()=>{}

const sum = () => {
  //A function is created to perform specific task or program
  console.log("Hello");
  const a = 20;
  const b = "30";
  const d = 10;
  const c = a + d + b;
  console.log(c); //String concatenation
  //String is powerful
};

sum();

//When we create function we should always call it to execute

sum(10, 20);
