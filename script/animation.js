var bear = document.querySelector(".showContainerSection");
var showContainer = document.querySelector(".showContainer");
var body = document.querySelector(".bodyOn");

setTimeout(function(){
    bear.classList.add("showContainerAnimation");
    showContainer.classList.add("showContainerAnimationOpacity");
    body.classList.add("body");
},2000)
function svgClose() {
    bear.classList.remove("showContainerAnimation");
    showContainer.classList.remove("showContainerAnimationOpacity");
    body.classList.remove("body");
}