const draggables = document.querySelectorAll('.draggable');
const imageContainer = document.querySelectorAll('.image-container');
const imageSelector = document.querySelector('.image-selector')
draggables.forEach(draggables => {
    draggables.addEventListener('dragstart', () =>{
        draggables.classList.add('dragging');
    })

    draggables.addEventListener('dragend',()=>{
        draggables.classList.remove('dragging');
    })
    
})
imageContainer.forEach(containers =>{
    containers.addEventListener('dragover',()=>{
        const draggable = document.querySelector('.dragging');
        containers.appendChild(draggable);
    })
})

imageSelector.addEventListener('dragover', ()=>{
    const draggable = document.querySelector('.dragging');
        imageSelector.appendChild(draggable);
})