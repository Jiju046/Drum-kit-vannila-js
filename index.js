for (i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",audio9)
document.querySelectorAll(".drum")[i].addEventListener("keydown",audio9)
}
    

function audio9(){
    var buttonInnerHtml =this.innerHTML;
    switch (buttonInnerHtml){
        case "w":
var audio1=new Audio("tom-1.mp3");
    audio1.play();   
    break;

    case "a":
        var audio2=new Audio("tom-2.mp3");
        audio2.play();
        break;

        case "s":
            var audio3=new Audio("tom-3.mp3");
            audio3.play();
            break;

            case "d":
                var audio4=new Audio("tom-4.mp3");
                audio4.play();
                break;

                case "j":
                    var audio5=new Audio("kick-bass.mp3");
                    audio5.play();
                    break;

                    case "k":
                        var audio6=new Audio("snare.mp3");
                        audio6.play();
                        break;

                        case "l":
                            var audio7=new Audio("crash.mp3");
                            audio7.play();
                            break;

                            default:console.log(innerHTML);
    }
 }
;

