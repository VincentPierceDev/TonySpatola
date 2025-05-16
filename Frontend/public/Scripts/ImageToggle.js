const images = [...document.querySelectorAll('.gallery-image-wrapper')];

document.addEventListener('click', (event) => {
    images.map((image) => {
        if(event.target.parentElement.id === image.id){
            const displayPhoto = document.getElementById('display-image');
            displayPhoto.classList.add('select-image-container');
            displayPhoto.classList.remove('unselect-image-container');
        }    
    })
})