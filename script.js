
  /* Task-1  */
let btn = document.querySelector(".task-1");
let p = document.querySelector("p");

btn.addEventListener("click",function(){
p.textContent = "hii Shravan";
p.style.color = "skyblue";
p.style.fontSize = "45px";
console.log("hiii");
})

  /* Task-2  */
let swapbtn = document.querySelector(".swapimg");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

swapbtn.addEventListener("click", function(){

let src1 = img1.src ;
let src2 = img2.src ;

img1.src = src2;
img2.src = src1;

})

  /* Task-3  */
let form = document.querySelector("form");
let inpus = document.querySelectorAll('input[type = "text"]');
let h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev){
  ev.preventDefault();

  for(let i=0; i<inpus.length; i++){
    if(inpus[i].ariaValueMax.trim()===''){
        h4.textContent = "errrorr";
        h4.style.color = "rosered";
        break;
    }
  }
})

  /* Task-4  */
let addbtn = document.querySelector("#add");
let removebtn = document.querySelector("#remove");
let inp = document.querySelector("inps");
let ul = document.querySelector("ul")
let li ;

addbtn.addEventListener("click",function(){

  if(inp.value.trim()===''){}
  else{
        li = document.createElement("li")
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value= '';
  }

})
removebtn.addEventListener("click",function(){
 ul.removeChild(li)
  })


    /* Task-5  */
  let start= document.querySelector("#start");
  let stop = document.querySelector("#stop");
  let h3 = document.querySelector("h3");
  let count=0;
  let int;
  start.addEventListener("click", function(){
   int = setInterval(function(){
      h3.textContent = count;
      count++;
    },1000)
  })
  
   stop.addEventListener("click", function(){
        clearInterval(int);
  })