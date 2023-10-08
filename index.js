//alert("hey baipa i'm js working fi9..")
/*while(i<document.querySelector(".drum").length)
    {

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   alert("working");
});

i--;

}*/
//key press

for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnnimation(buttonInnerHtml);
        
    });
   
}
  //button press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


            case "W":
                var crash1 = new Audio("sounds/crash.mp3");
                crash1.play();
                break;
            case "A":
                var kickbass1 = new Audio("sounds/kick-bass.mp3");
                kickbass1.play();
                break;
            case "S":
                var snare1 = new Audio("sounds/snare.mp3")
                snare1.play();
                break;
            case "D":
                var tom11 = new Audio("sounds/tom-1.mp3");
                tom11.play();
                break;
            case "J":
                var tom12 = new Audio("sounds/tom-2.mp3");
                tom12.play();
                break;
            case "K":
                var tom31 = new Audio("sounds/tom-3.mp3");
                tom31.play();
                break;
            case "L":
                var tom14 = new Audio("sounds/tom-4.mp3");
                tom14.play();
                break;
        default:console.log(buttonInnerHtml)
            break;
    } 
}

function buttonAnnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}