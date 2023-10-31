var cus= document.querySelector(".cursor")
var maindiv= document.querySelector(".main")

maindiv.addEventListener("mousemove",function(dets){
    cus.style.left= dets.x + "px"
    cus.style.top= dets.y + "px"

})