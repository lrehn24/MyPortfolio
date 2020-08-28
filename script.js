// expand drop down menu for mobile
function expand() {
    var nav = document.getElementById("topNav");
    if(nav.style.display == "none") {
        nav.style.display = "block";
    }
    else if(nav.style.display == "block") {
        nav.style.display = "none";
    }
}
// change display for mobile devices
function dropMenu(x) {
    var nav = document.getElementById("topNav");
    if(!x.matches) {
        nav.style.display = "flex";
    }
    else {
        nav.style.display = "none";
        document.getElementById("menu").addEventListener("click", expand);
    }
}
var x = window.matchMedia("(max-width: 800px)" || "(max-width: 500px)")
dropMenu(x)
x.addListener(dropMenu)

// hover effect for greeting
window.onload = function() {welcome()};
function welcome() {
    const h1s = document.querySelectorAll(".greeting h1")
    for (i = 0; i < h1s.length; i++) {
        h1s[i].classList.add("animated", "rubberBand")
    }
}

// nav bar scroll effect
window.onscroll = function() {navScroll()};
function navScroll() {
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("nav").style.backgroundColor = "#fff";
    }
    else {
        document.getElementById("nav").style.backgroundColor = "transparent";
    }
}