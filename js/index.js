//Ten unique events//

//mouseover//
const navLinks = document.querySelector('nav a')
console.log(navLinks)
navLinks.addEventListener("mouseover", (event)=>{
    console.log(event)
navLinks.style.color = "rgb(252,188,78)"

setTimeout(()=>{
    navLinks.style.color ="black"
},700)

},false)

//keypress//

const bodyTag =
document.querySelector('body')

bodyTag.addEventListener('keypress',(event)=> {
  bodyTag.style.backgroundColor ='seagreen'
})










//mouseenter,mouseleave//
const textContent = document.querySelector(".text-content p")

textContent.addEventListener('mouseenter',(event)=>{
    textContent.style.transform = "scale(1.2)";
       textContent.style.transition = "all 0.2s";
     });

     textContent.addEventListener('mouseleave', (event) => {
        
        textContent.style.transform = "scale(1.0)";
          textContent.style.transition = "all 0.2s";
         });


