const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

// Add drag event listeners to each card
cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

// Add drop event listeners to each list
lists.forEach((list) => {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", this.id);
  setTimeout(() => {
    this.classList.add("hide");
  }, 0);
}

function dragEnd() {
  this.classList.remove("hide");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("drag-over");
}

function dragLeave() {
  this.classList.remove("drag-over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.appendChild(card);
  this.classList.remove("drag-over");
}
