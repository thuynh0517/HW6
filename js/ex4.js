const addLink = () =>{
  const link = document.createElement('li')
  link.id = "cob"
  const a = document.createElement("a");
  const text = document.createTextNode("College of Business");
  a.appendChild(text);
  a.href = "https://www.csulb.edu/college-of-business"
  link.appendChild(a);
  document.getElementById("links").insertBefore(link, document.getElementById("is"))
}

addLink()