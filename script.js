

let lists = document.getElementById("lists");

let input = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Type Something");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    lists.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
    console.log(input.value);
  }
  saveData();
  input.value = "";
});

lists.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    console.log(e.target.value);
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

let saveData = ()=>{
    localStorage.setItem("data",lists.innerHTML);
}
let getData = ()=>{
    lists.innerHTML = localStorage.getItem("data");
}
getData();