let boxies=document.querySelectorAll(".box")
let fill=document.querySelector(".fill")

boxies.forEach((box)=>{
    box.addEventListener("dragover",(e)=>{
        e.preventDefault()
        e.target.classList.add("hovered")
    })
    box.addEventListener("dragleave",(e)=>{
        e.target.classList.remove("hovered")
    })
    box.addEventListener("drop",(e)=>{
        box.appendChild(fill)
        e.target.classList.remove("hovered")
    })
})