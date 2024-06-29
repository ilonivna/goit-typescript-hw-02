import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ images, onImageClick }) {
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