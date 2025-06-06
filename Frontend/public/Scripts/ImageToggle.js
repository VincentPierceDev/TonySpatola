const images = [...document.querySelectorAll('.gallery-image-wrapper')];

function Start() {
    document.addEventListener('click', (event) => {
        SelectImage(event);
        SetImageSource(event);
        CloseButton(event);
    });
}

function SelectImage(event){
     images.map((image) => {
        if(event.target.parentElement.id === image.id){
            const displayPhoto = document.getElementById('display-image');

            if(!displayPhoto) return;

            displayPhoto.classList.add('select-image-container');
            displayPhoto.classList.remove('unselect-image-container');
            document.body.style.overflow = 'hidden';
        }    
    });
}

function SetImageSource(event){
    const clickedBorderID = event.target.parentElement.id;
    const ImageOffset = Number(clickedBorderID.substring(8)) + 1;
    const constructedPath = '/TonySpatola/GalleryPhotos/GPhoto' + ImageOffset + 'Full.webp';

    window.dispatchEvent(new CustomEvent("updateImage", {detail: constructedPath}));
}

function CloseButton(event){
    if(event.target.id === "close-display-img"){
        const displayPhoto = document.getElementById('display-image');

        if(!displayPhoto) return;

        displayPhoto.classList.add('unselect-image-container');
        displayPhoto.classList.remove('select-image-container');
        document.body.style.overflow = 'auto';
    }
}



Start();