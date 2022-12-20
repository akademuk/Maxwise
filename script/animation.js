var bear = document.querySelector(".showContainer");
var body = document.querySelector(".bodyOn");
setTimeout(function(){
    bear.classList.add("showContainerAnimation");
    // body.classList.add("body");
},2000)
function svgClose() {
    bear.classList.remove("showContainerAnimation");
    // body.classList.remove("body");
}