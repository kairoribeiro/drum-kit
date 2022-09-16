
let numberOfDrumButtons = document.querySelectorAll(".drum").length

function handleClick() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);    
}


