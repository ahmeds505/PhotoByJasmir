const dropdownBtn = document.getElementById("dropdown")
const dropdownContent = document.getElementById("dropdown-content")

const dropBtnLijevi = document.getElementById("lijevi")
const dropBtnDesni = document.getElementById("desni")
const dropMenuLijevi = document.getElementById("dropdown-lijevi")
const dropMenuDesni = document.getElementById("dropdown-desni")

dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.add("show");
})

dropBtnLijevi.addEventListener("click", () => {
    dropMenuLijevi.classList.add("main-show")
})
  
dropBtnDesni.addEventListener("click", ()=>{
    dropMenuDesni.classList.add("main-show")
})

window.addEventListener("click", (event) => {
    console.log(event.target)
   
    if (!event.target.classList.contains("drop")) 
    {
        dropdownContent.classList.remove("show")
        dropMenuLijevi.classList.remove("main-show")
        dropMenuDesni.classList.remove("main-show")
    }
    
})