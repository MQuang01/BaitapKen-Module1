function handleClickProf() {
  document.querySelector(".profile-option").style.display = "flex"
}
let modal = document.querySelector(".icon-prof");
let iProfile = document.querySelector("#iProfile");
window.onclick = function(evt) {
  if(evt.target !== modal && evt.target !== iProfile){
    document.querySelector(".profile-option").style.display = "none";
  }
}