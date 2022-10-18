"use strict";
let grid_number = 0;
let container = document.querySelector(".main-container");

let total_number_boxes = 0;
let grid_btn = document.querySelector(".set-grid");
let clear_btn = document.querySelector(".clear-grid");

function set_grid_boxes() {
  for (let i = 1; i <= total_number_boxes; i++) {
    let box = document.createElement("div");
    box.classList.add("inside-box", "hover-cover-background-color");
    container.appendChild(box);
  }
}

function set_background_color() {
  let background = document.querySelector(".inside-box");
  for (let element of container.children) {
    element.style.backgroundColor = `${color}`;
  }
}

function set_grid_columns_rows() {
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${grid_number}, 1fr)`
  );
  container.style.setProperty(
    "grid-template-rows",
    `repeat(${grid_number}, 1fr)`
  );
}

function add_hover_class() {
  for (let element of container.children) {
    element.addEventListener("mouseover", hover_effect);
  }
}

function hover_effect() {
  this.classList.remove("hover-cover-background-color");
}

function remove_container_div() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function remove_hover_effect(element) {
  element.classList.add("hover-cover-background-color");
}

grid_btn.addEventListener("click", () => {
  remove_container_div();
  grid_number = parseInt(prompt("Inter grid number"));
  total_number_boxes = grid_number * grid_number;
  set_grid_boxes();
  set_background_color();
  set_grid_columns_rows();
  add_hover_class();
});

clear_btn.addEventListener("click", () => {
  for (let element of container.children) {
    remove_hover_effect(element);
  }
});

let color_picker = document.querySelector("#colorpicker");

let color = color_picker.value;

color_picker.addEventListener("change", (e) => {
  color = color_picker.value;
  for (let element of container.children) {
    remove_hover_effect(element);
  }
  set_background_color();
});
