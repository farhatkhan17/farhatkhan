var menu = document.querySelector("#menu")
var menubar = document.querySelector("#menubar")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var line3 = document.querySelector("#line3")


var flag = 0
menu.addEventListener("click",function(){
    if(flag===0){
        menubar.style.top =0
        line1.style.rotate = "35deg"
        line2.style.opacity = 0
        line3.style.rotate = "-30deg"
    flag = 1}
    else{
        line1.style.rotate = "0deg"
        line2.style.opacity = 1
        line3.style.rotate = "0deg"
        menubar.style.top =" -100%"
        flag=0
    
    }
})