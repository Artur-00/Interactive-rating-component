



function select(button) {
    
    const selectedButtons = document.querySelectorAll(".button-selected");
    var indexNumber;

    if (button.classList.contains("button-selected")) {
        button.classList.remove("button-selected");
        indexNumber = 0;
    } else if (selectedButtons.length > 0) {
        for (var buttons of selectedButtons) {
            buttons.classList.remove("button-selected");
            button.classList.add("button-selected");
            indexNumber = button.innerHTML;
        }
    } else {
        button.classList.add("button-selected");
        indexNumber = button.innerHTML;
    }

    sessionStorage.setItem("selected", indexNumber);

}

