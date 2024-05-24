let btn = document.querySelector(".task-1");
let p = document.querySelector("p");

btn.addEventListener("click",function(){
p.textContent = "hii Shravan";
p.style.color = "skyblue";
p.style.fontSize = "45px";
console.log("hiii");
})


let swapbtn = document.querySelector(".swapimg");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

swapbtn.addEventListener("click", function(){

let src1 = img1.src ;
let src2 = img2.src ;

img1.src = src2;
img2.src = src1;


})
