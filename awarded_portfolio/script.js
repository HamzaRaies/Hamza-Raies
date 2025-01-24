
 
document.querySelectorAll(".reveal")
.forEach(function(elem){
    var parent = document.createElement("span")
    var child = document.createElement("span")
    parent.classList.add("parent")
    child.classList.add("child")
    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML="";
    elem.appendChild(parent);

})
var tl=gsap.timeline();
tl
.from(".child span",{
    x:100,
    duration:2,
    delay:0.3,
    stagger:.2,
    ease:Power3.easeInOut


})
.to(".parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.inOut

})
.to(".loader",{
    height:0,
    duration:.5,
    ease:Circ.inOut

})
.to(".green",{
    height:"100%",
    top:0,
    duration:.5,
    delay:-.9,
    ease:Circ.inOut

})
.to(".green",{
    height:"0%",
    top:0,
    duration:.7,
    delay:-.5,
    ease:Circ.inOut

})

.to(".web",{
    x:-150,
    duration:.9,
    ease:Power3.easeInOut
})


// Navbar
const hamburger = document.getElementById("hamburger");
const list = document.getElementById("list");
const overlay = document.getElementById("overlay");
const icon = document.getElementById("icon");

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    list.classList.toggle("nav-list-active");
    overlay.classList.toggle("overlay-active");
    icon.classList.toggle("fa-xmark");
});

overlay.addEventListener("click", () => {
    list.classList.remove("nav-list-active");
    overlay.classList.remove("overlay-active");
});