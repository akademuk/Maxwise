var bear = document.querySelector(".showContainer");
setTimeout(function(){
    bear.classList.add("showContainerAnimation");
},3000)
function svgClose() {
    bear.classList.remove("showContainerAnimation");
}