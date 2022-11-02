// Landing typing effect
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


// Progress bars effect
let section = document.querySelector(".skills .container");
let progress = document.querySelectorAll(".progress-bar");

//active section effect
let PageSections = document.querySelectorAll(".page")
let tabs = document.querySelectorAll(".nav-link");

window.onscroll=function(){

    if(window.scrollY>=section.offsetTop-150){
        progress.forEach((prog) =>{
            prog.style.width = prog.dataset.width;
        })
    }


    if(window.scrollY>=PageSections[0].offsetTop -400 && window.scrollY<PageSections[1].offsetTop -300 ){
        tabs[0].classList.add("active");
        tabs[1].classList.remove("active");
        tabs[3].classList.remove("active");
        tabs[2].classList.remove('active');

    }
    else if(window.scrollY>=PageSections[1].offsetTop -400 && window.scrollY<PageSections[2].offsetTop -300 ){
        tabs[0].classList.remove("active");
        tabs[2].classList.remove('active');
        tabs[3].classList.remove("active");
        tabs[1].classList.add("active");
    }
    else if(window.scrollY>=PageSections[2].offsetTop -400 && window.scrollY<PageSections[3].offsetTop -300){
        tabs[1].classList.remove('active');
        tabs[2].classList.add("active");
        tabs[3].classList.remove("active");
        tabs[0].classList.remove('active');
    }
    else if(window.scrollY>=PageSections[3].offsetTop -400 && window.scrollY<PageSections[4].offsetTop -300){
        tabs[1].classList.remove('active');
        tabs[2].classList.remove("active");
        tabs[3].classList.add("active");
        tabs[0].classList.remove('active');
    }
}

//scroll to view 
