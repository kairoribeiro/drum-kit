
let numberOfDrumButtons = document.querySelectorAll(".drum").length

function handleClick() {
    alert("I got clicked")
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);    
}


