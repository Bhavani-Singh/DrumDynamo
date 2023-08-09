const buttons = document.querySelectorAll(".drum");

// detecting the mouse click
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });
}

// detecting the key press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);    
});


function makeSound(key) {

    switch(key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            buttonAnimation(key);
        break;
        
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            buttonAnimation(key);
        break;

        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            buttonAnimation(key);
        break;

        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            buttonAnimation(key);
        break;

        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            buttonAnimation(key);
        break;

        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            buttonAnimation(key);
        break;

        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            buttonAnimation(key);
        break;

        default:
            console.log("Some erro occured while playing the sound");
    }
}

function buttonAnimation(currentKey) {
    // console.log(currentKey);
    const activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}