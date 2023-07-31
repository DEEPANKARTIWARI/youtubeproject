import React from "react";

const Temp1 = () => {
  let array = ["mango", "banana", "mango", "mango", "apple", "banana", "mango"];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          array.splice(j, 1);
          --j;
        }
      }
    }
  }
  console.log(array);
  return <div>Temp1</div>;
};

export default Temp1;
