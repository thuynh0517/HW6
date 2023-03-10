const n1 = prompt("Enter first integer: ");
const n2 = prompt("Enter second integer: ");


const numN1 = Number(n1);
const numN2 = Number(n2);


const contentElement = document.getElementById("content")

if (Number.isInteger(numN1) && Number.isInteger(numN2)) {
  const startString = document.createTextNode(`${n1} + ${n2} = `);

  const sumEl = document.createElement("span");
  sumEl.style.color = "red";
  sumEl.textContent = numN1 + numN2;

contentElement.appendChild(startString);
contentElement.appendChild(sumEl);
} else {
  
  const errorElement = document.createElement("span");
  errorElement.textContent = "Error!";
  errorElement.style.color = "red";
  
  contentElement.appendChild(errorElement);
  
  contentElement.appendChild(document.createTextNode(` You must enter integers. You entered "${n1}" and "${n2}"`))
}