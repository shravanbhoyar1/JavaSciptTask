
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

  /* Task-6 increase decrease button*/
        let inc = document.querySelector("#increase");
        let dec = document.querySelector("#decrease");
        let h2 = document.querySelector("h2");
        

        inc.addEventListener("click", function() {
            count++;
            h2.textContent = count;
        });

        dec.addEventListener("click", function() {
            if (count > 0) {
                count--;
                h2.textContent = count;
            }
        });

        
  /* Task-7 */

        let home = document.querySelector("#home");
        let contact = document.querySelector("#contact");
        let about = document.querySelector("#about");
        let hometext = document.querySelector("#hometext");
        let contacttext = document.querySelector("#contacttext");
        let abouttext = document.querySelector("#abouttext");

       hometext.style.display = "block";
       hometext.style.width= "50%"; 

       home.addEventListener("click", function(){
        removeAllText()
        hometext.style.display = "block";
        hometext.style.width= "50%"; 
       })
       about.addEventListener("click", function(){
        removeAllText()
        abouttext.style.display = "block";
        abouttext.style.width= "50%"; 
       })
       contact.addEventListener("click", function(){
        removeAllText()
        contacttext.style.display = "block";
        contacttext.style.width= "50%"; 
       })

       function removeAllText(){
        document.querySelectorAll(".text").forEach(function(text){
          text.style.display = "none";
        })
       }