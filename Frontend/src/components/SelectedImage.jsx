import { useState, useEffect } from 'react';
import '../css/SelectedImage.css';

const SelectedImage = () => {

    const [currentImage, setCurrentImage] = useState("../src/assets/Gallery/GPhoto1Full.webp");

    useEffect(() => {
        const handler = (e) => {
            const file = e.detail;
            if (file.indexOf(NaN) === -1)
                setCurrentImage(e.detail);
        }
        window.addEventListener("updateImage", handler);
        return () => window.removeEventListener("updateImage", handler);
    }, []);

    return(
        <div id="display-image" className="unselect-image-container">
            <button id="close-display-img" className="close-button"><span>X</span></button>
            <picture className="image-wrapper">
                <source media="(max-width: 850px)" srcSet={currentImage} width="200"/>
                <source media="(min-width: 851px)" srcSet={currentImage} width="400"/>
                <img id="display-image-photo" className="image" src={currentImage} alt="display photo" width="400" loading="lazy" decoding="async"/>
            </picture>
        </div>
    )
}

export default SelectedImage;