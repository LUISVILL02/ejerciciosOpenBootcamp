const parrafos = document.querySelectorAll(".parrafo");
const seccions = document.querySelectorAll(".seccion");
const delet = document.querySelector(".delete");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        parrafo.classList.add("draging");
        event.dataTransfer.setData("id", parrafo.id);
    })
    parrafo.addEventListener("dragend", () =>{
        parrafo.classList.remove("draging");
    })
})

seccions.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault();
    })
    seccion.addEventListener("drop", event => {
        const parr = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(parr);
        seccion.appendChild(parrafo);
    })
})
delet.addEventListener("dragover", event =>{
    event.preventDefault();
})
delet.addEventListener("drop", event =>{
    const parr = event.dataTransfer.getData("id");
    document.getElementById(parr).remove();
    
})