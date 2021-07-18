const file = document.querySelector(".file-upload");


//DRAG AND DROP FEATURE
function updateDraggables(){
    const draggables = document.querySelectorAll('.draggable');
    const imageContainer = document.querySelectorAll('.image-container');
    const imageSelector = document.querySelector('.image-selector');

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
}


//IMAGE UPLOAD TROUGH API
file.addEventListener('change',(e)=>{

const formData = new FormData();
formData.append("image",e.target.files[0]);

fetch("https://api.imgur.com/3/image", {
	"method": "POST",
	"headers": {
		"Authorization": "Client-ID 5e51192d9242f14"
	},
	"body":formData,
}).then(res => res.json())
.then(data =>{

    if(data.success === true){
        console.log(data)
        const imageSelector = document.querySelector(".image-selector");
        const img = document.createElement('div');

        img.setAttribute("style", `background-image: url(${data.data.link});background-size: cover; height: 80px; width: 80px;`)
        img.setAttribute('class','draggable')
        img.setAttribute('draggable','true')

        imageSelector.appendChild(img)
        updateDraggables();
        }
        else{
            console.log(data)
        }
        
    }
    )
    .catch(err=> console.log(err))


})