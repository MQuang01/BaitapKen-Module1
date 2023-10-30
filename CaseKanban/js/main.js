function handleClickTaskWeek(value) {
  if(value == 'w1'){
    let boardWeek = document.getElementById("board-w1");
    let chevronIcon = document.querySelector(".weekend-1 label i");
  
    if (boardWeek.style.display === "flex") {
      boardWeek.style.display = "none";
      chevronIcon.classList.remove("fa-chevron-down");
      chevronIcon.classList.add("fa-chevron-up");
    } else {
      boardWeek.style.display = "flex";
  
      chevronIcon.classList.remove("fa-chevron-up");
      chevronIcon.classList.add("fa-chevron-down");
    }
  }
  if (value == 'w2'){
    let boardWeek = document.getElementById("board-w2");
    let chevronIcon = document.querySelector(".weekend-2 label i");
  
    if (boardWeek.style.display === "flex") {
      boardWeek.style.display = "none";
      chevronIcon.classList.remove("fa-chevron-down");
      chevronIcon.classList.add("fa-chevron-up");
    } else {
      boardWeek.style.display = "flex";
  
      chevronIcon.classList.remove("fa-chevron-up");
      chevronIcon.classList.add("fa-chevron-down");
    }
  }
}



