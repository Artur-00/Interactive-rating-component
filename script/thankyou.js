

var selectedNumber = sessionStorage.getItem("selected");

const rating = document.getElementsByClassName("rating")[0];
rating.innerHTML = selectedNumber;

