import '../css/SelectedImage.css';

const SelectedImage = () => {

    return(
        <div id="display-image" className="unselect-image-container">
            <button id="close-display-img" className="close-button"><span>X</span></button>
            <picture className="image-wrapper">
                <source media="(max-width: 850px)" srcSet="../src/assets/Gallery/GPhoto1Full.jpg" width="200"/>
                <source media="(min-width: 851px)" srcSet="../src/assets/Gallery/GPhoto1Full.jpg" width="400"/>
                <img id="display-image-photo" className="image" src="../src/assets/Gallery/GPhoto1Full.jpg" alt="display photo" width="400" loading="lazy" decoding="async"/>
            </picture>
        </div>
    )
}

export default SelectedImage;