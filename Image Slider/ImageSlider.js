const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const imgCon = document.querySelector('.image-container')
const images = document.querySelectorAll('img')

/* Toggle Dark Mode Button */

const inputEl = document.querySelector('.input')
const body = document.querySelector('body')

let currentImg = 1;
let timeout;

inputEl.checked = JSON.parse(localStorage.getItem("mode"))
updateBody()

    
next.addEventListener("click", (e) => {
    currentImg++;
    clearTimeout(timeout)
    updateImg();
})

prev.addEventListener("click", (e) => {
    currentImg--;
    clearTimeout(timeout)
    updateImg();  
})



updateImg()

function updateImg(){
    if(currentImg > images.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = images.length
    }
    imgCon.style.transform = `translateX(-${(currentImg - 1) * 800}px)`;
    
    timeout = setTimeout(()=>{
    currentImg++
    updateImg()
    },  3000) 
}
    
/* Toggle Dark Mode Button */



function updateBody(){
    if(inputEl.checked){
        body.style.background="black";
        
    }
    else{
        body.style.background="papayawhip";
    }
}

inputEl.addEventListener("input", () => {
    updateBody()
    updateLocalStorage()
})


function updateLocalStorage(){
    localStorage.setItem("mode",
    JSON.stringify(inputEl.checked))
} 