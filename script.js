const addBtn = document.querySelector("#add");
const delBtn = document.querySelector("#del");
const select = document.querySelector("select");
const icon = document.querySelector(".icon");
const cart = document.querySelector(".plates");

let item = "vine";
let state = {
  list: [],
};

let data = localStorage.getItem("data");
if (data) {
  // -- true
  state = JSON.parse(data);
  // console.log(state);
}

window.onload = () => {
  let loaded = sessionStorage.getItem("loaded");
  // console.log(loaded);  -- true
  if (loaded) {
    saveList();
  } else {
    sessionStorage.setItem("loaded", true);
  }
};

function saveList() {
  cart.innerHTML = "";
  for (let i = 0; i < state.list.length; i++) {
    let li = document.createElement("li");
    li.innerText = state.list[i];
    cart.appendChild(li);
  }
}

select.addEventListener("change", (el) => {
  item = el.target.value;
  icon.style.backgroundImage = 'url("img/' + item + '.svg")';
});

add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = item;
  cart.appendChild(li);

  state.list.push(item);
  localStorage.setItem("data", JSON.stringify(state));
});

del.addEventListener("click", () => {
  cart.innerHTML = "";
  localStorage.clear();
  state.list = [];
});
