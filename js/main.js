var type = ["Full Stack Web Developer"];
var textPosition=0;
var speed =100;

typewriter =()=>{
    document.querySelector(".diff").innerHTML = type[0].substring(0,textPosition) + "<span class= \"rec\"> \u25ae </span>";
    if(textPosition++ != type[0].length){
        setTimeout(typewriter,speed);
    }
}

window.addEventListener("load",typewriter);