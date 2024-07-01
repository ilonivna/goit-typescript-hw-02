import {ImageCard} from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (data: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
    return (
        <ul className={css.galleryList}>
            {images.map(({ id, description, urls }) => (
                <li className={css.imageCard} key={id}>
                    <ImageCard description={description} urls={urls} onClick={onImageClick} />
	</li>
    ))}
</ul>

    )
}

export default ImageGallery;