const tableElement = document.createElement("table");

for (let i = 1; i <= 12; i++) {
  const rowElement = document.createElement("tr");
  const tdElement = document.createElement("td");
  tdElement.textContent = i;

  
  if (i%4 === 0) {
    tdElement.classList.add("div4blue");
  }

  
  rowElement.appendChild(tdElement);
  tableElement.appendChild(rowElement);
}

document.getElementById("output").appendChild(tableElement);