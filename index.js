// Write your code here
const Element = document.getElementById("main")
Element.remove()

const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")

newHeader.textContent = "Isaac is the champion"
