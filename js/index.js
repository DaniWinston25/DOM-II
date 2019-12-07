//Ten unique events//

//mouseover//
const navLinks = document.querySelectorAll('.nav-link')
console.log(navLinks)
navLinks.forEach((anchor)=>{
anchor.addEventListener("mouseover", (event)=>{
event.target.style.color = "rgb(252,188,78)"
setTimeout(()=>{
    event.target.style.color ="black"
},700)
})




},false)

//keypress//

const bodyTag =
document.querySelector('body')

bodyTag.addEventListener('keypress',(event)=> {
  bodyTag.style.backgroundColor ='seagreen'

  setTimeout(()=>{
    bodyTag.style.backgroundColor ="white"
},5000)

},false)


//animate//

const mainImg = document.querySelector('intro')










//mouseenter,mouseleave//
const textContent = document.querySelectorAll(".text-content")
textContent.forEach((zoom)=>{
zoom.addEventListener('mouseenter',(event)=>{
    event.target.style.transform = "scale(1.2)";
       event.target.style.transition = "all 0.2s"; 
     })
    });

textContent.forEach((zoom)=>{
    zoom.addEventListener('mouseleave', (event) => {
        event.target.style.transform = "scale(1.0)";
          event.target.style.transition = "all 0.2s";
         })
        });

