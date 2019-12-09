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
  bodyTag.style.backgroundColor ='rgb(94,219,175)'

  setTimeout(()=>{
    bodyTag.style.backgroundColor ="white"
},5000)

},false)


//animate//

const mainImg = document.querySelector('[src="img/fun-bus.jpg"]')

mainImg.addEventListener('mouseenter',(event)=>{
    event.target.style.transform = ('rotate(15deg) translateX(30px)');
})

mainImg.addEventListener('mouseleave',(event)=>{
    event.target.style.transform = ('rotate(0deg) translateX(0px)');
 
})

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

//sound//

const soundBoat = document.getElementById('boatsound');

const boatPic = document.querySelector('[src="img/destination.jpg"]')
boatPic.addEventListener('dblclick',(event)=>{
  soundBoat.play()
})


//stop propagation---not working not sure why?//

const stoppingZoom = document.querySelector('.text-content');

stoppingZoom.addEventListener('mouseenter',(event)=>{
     event.stopPropagation();
  })

//prevent Default//

const stopNavigation = document.querySelectorAll('.nav-link')

stopNavigation.forEach((anchor)=>{
  anchor.addEventListener("click",(event)=>{
  event.preventDefault()
})
});

///STRETCH ATTEMPT///

//images animation//

gsap.to(".img-content", {duration: 2.5, ease:"elastic.out(1, 0.3)", y: 40
});
