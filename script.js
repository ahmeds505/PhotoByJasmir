const dropdownBtn = document.getElementById("dropdown")
const dropdownContent = document.getElementById("dropdown-content")

dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.add("show");
})

window.addEventListener("click", (event) => {
    console.log(event.target)
   
    if (!event.target.classList.contains("drop")) 
    {
        dropdownContent.classList.remove("show")
    }
    
})


