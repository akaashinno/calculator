
let input = document.getElementById('input');
let number = document.querySelectorAll('.numbers .btn');
let operator = document.querySelectorAll('.operators button');
let result = document.getElementById('result');
let clear = document.getElementById('clear');
let decimal= document.getElementById('decimal');
let displayView = false;
// let initialZero="0";

for (let i = 0; i < number.length; i++) {

  number[i].addEventListener("click", function(e) {
    let currentStr = input.innerHTML;
    let lastChar = currentStr[currentStr.length - 1];

    if (displayView === false) {
        input.innerHTML += e.target.innerHTML;}
    else if (displayView === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
        displayView = false;
        input.innerHTML += e.target.innerHTML;}
    else {
      displayView = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

decimal.addEventListener("click", function(e){
  
        let inptStr = input.innerHTML;
        let num = inptStr.split(/\+|\-|\×|\÷/g);
        // console.log(num);
        let lastElement = num[num.length - 1];
          // console.log(lastElement)
        let hasDecimal = lastElement.includes(".");
    
        if (!hasDecimal) {
            input.innerHTML += ".";
        }
        else{

        }

});

for (let i = 0; i < operator.length; i++) {

  operator[i].addEventListener("click", function(e) {

    let currentStr = input.innerHTML;
    let lastChar = currentStr[currentStr.length - 1];

    
    // let newStr = input.innerHTML;
    // let firstChar = newStr[0];
    // console.log(firstChar);

  let newStr = input.innerHTML;
  let firstChar = newStr[0];
  // console.log(firstChar);
  
  if(firstChar === "+" || firstChar === "-" || firstChar === "×" || firstChar === "÷"){
    newStr = newStr.substring(1);
    input.innerHTML = newStr;
  }
  else{

  }

    // if(firstChar === "+" || firstChar === "-" || firstChar === "×" || firstChar === "÷"){
    //   firstChar= "";
    //   newStr[0]= firstChar;
    // }

    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
        let newString = currentStr.substring(0, currentStr.length - 1) + e.target.innerHTML;
        input.innerHTML = newString;} 
    else {
        input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function() {

  let inputString = input.innerHTML;
  
  let numbers = inputString.split(/\+|\-|\×|\÷/g);
  // let numbers = inputString.split('+','-','×','÷');
  
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  let divide = operators.indexOf("÷");
  
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  input.innerHTML = numbers[0];
  displayView = true;
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
})
