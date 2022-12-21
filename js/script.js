// for Preloader 
const preloader=document.querySelector(".preloader");

window.addEventListener('load',()=>{
  
  setTimeout(function(){
    preloader.style='display:none;'
  },000);
})


// for mouse move 
const cursor =document.querySelector(".cursor");
const pointer =document.querySelector(".pointer");

window.addEventListener("mousemove",(e)=>{

//  cursor.setAttribute("style","top:" + e.pageY + "px;"+ "left:"+e.pageX + "px;");
//  cursor.setAttribute("style","top:" + e.pageY + "px;"+ "left:"+e.pageX + "px;");

 cursor.setAttribute("style",`top:${e.pageY}px; left:${e.pageX}px;`);
 pointer.setAttribute("style",`top:${e.pageY}px; left:${e.pageX}px;`);
  

});

// for color Switcher 
let switcher= document.querySelector(".switch");
let color_switcher= document.querySelector(".color_switcher");


switcher.addEventListener('click',()=>{
  color_switcher.classList.toggle("show");
})

let colors=document.querySelectorAll(".color");
let root =document.querySelector(":root");

// color_gulo.forEach(function(a){
//   a.addEventListener('click',()=>{
//     let color_dhor=a.getAttribute('data-color');
//     root.style.setProperty('--primary-color',color_dhor);
//     root.style.setProperty('--heading-color',color_dhor);
//     root.style.setProperty('--paragraph-color',color_dhor);
//   })

// })

colors.forEach(function(e){
  e.addEventListener('click',()=>{
    let dataColor=e.getAttribute('data-color');
    root.style.setProperty('--primary-color', dataColor);
    root.style.setProperty('--heading-color', dataColor);
    root.style.setProperty('--paragraph-color', dataColor);
    root.style.setProperty('--white-color', dataColor);
   
  })
})



// for bg videos play 
// $('#banner_seciton').vide('../videos/v.mp4');

// for mixit up 
var mixer = mixitup('.gallery');

// for progress bar 
$(function(){
    $('#html').LineProgressbar({
        percentage: 98,
        ShowProgressCount: true,
        backgroundColor:'#6F2CF4',
        fillBackgroundColor:'#31D2F2',
        radius:'20px',
        width:'100%',
        height:'20px',
        duration:3000,
      });
      $('#css').LineProgressbar({
        percentage: 96,
        ShowProgressCount: true,
        backgroundColor:'#6F2CF4',
        fillBackgroundColor:'#31D2F2',
        radius:'20px',
        width:'100%',
        height:'20px',
        duration:3000,
      });
      $('#bootstrap').LineProgressbar({
        percentage: 95,
        ShowProgressCount: true,
        backgroundColor:'#6F2CF4',
        fillBackgroundColor:'#31D2F2',
        radius:'20px',
        width:'100%',
        height:'20px',
        duration:3000,
      });
      $('#javascript').LineProgressbar({
        percentage: 30,
        ShowProgressCount: true,
        backgroundColor:'#6F2CF4',
        fillBackgroundColor:'#31D2F2',
        radius:'20px',
        width:'100%',
        height:'20px',
        duration:3000,
      });
      $('#jquery').LineProgressbar({
        percentage: 40,
        ShowProgressCount: true,
        backgroundColor:'#6F2CF4',
        fillBackgroundColor:'#31D2F2',
        radius:'20px',
        width:'100%',
        height:'20px',
        duration:3000,
      });
})

// for mode chose 

let light =document.querySelector(".light");
let dark =document.querySelector(".dark");
let body =document.querySelector("body");



dark.addEventListener('click',()=>{
    body.classList.add("dark");
    dark.style='background:black; color:white;';
    light.style='background:#31D2F2; color:black;'
})
light.addEventListener('click',()=>{
    body.classList.remove("dark");
    light.style='background:white;';
    dark.style='background:#31D2F2; color:black;'
})



// for venobox 
new VenoBox({
  selector: '.my_image'
});