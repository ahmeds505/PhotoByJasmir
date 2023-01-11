const dropdownBtn = document.getElementById("dropdown")
const dropdownContent = document.getElementById("dropdown-content")

dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.add("show");
})

window.addEventListener("click", (event) => {
    if (!event.target.classList.contains("drop")) 
    {
        dropdownContent.classList.remove("show")
    }
})

const spremiBtn = document.getElementById("spremi")
const popupMessage = document.getElementById("popup-message")
const topNav = document.getElementById("top-nav")
const body = document.getElementById("rezervacija-body")

spremiBtn.addEventListener("click", () =>{
    
    popupMessage.style.display = "block"
    topNav.style.pointerEvents = "none"
    spremiBtn.style.pointerEvents = "none"
})

window.addEventListener("click", (event)=>{
    if(event.target == body){
        popupMessage.style.display = "none"
        topNav.style.pointerEvents = "auto"
        spremiBtn.style.pointerEvents = "auto"
    }
})

const daDugme = document.getElementById("da-dugme")
const neDugme = document.getElementById("ne-dugme")
const popupReport = document.getElementById("popup-report")
const nazadDugme = document.getElementById("nazad-dugme")

neDugme.addEventListener("click", ()=>{
    popupMessage.style.display = "none"
    topNav.style.pointerEvents = "auto"
    spremiBtn.style.pointerEvents = "auto"
})
daDugme.addEventListener("click", ()=>{
    popupMessage.style.display = "none"
    popupReport.style.display = "block"
})
nazadDugme.addEventListener("click", ()=>{
    popupReport.style.display = "none"
    topNav.style.pointerEvents = "auto"
    spremiBtn.style.pointerEvents = "auto"
})