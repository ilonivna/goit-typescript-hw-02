import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../images-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";







export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return;
        }

        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const { results, total } = await getImages(searchQuery, page);
                setImages((prevState) => [...prevState, ...results]);
                setTotalPages(page < Math.ceil(total / 12));
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchImages();
    }, [searchQuery, page]);

    const handleSearch = async (input) => {
        setSearchQuery(input);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = async () => {
        setPage(page + 1);
    }

    const openModal = (imageUrl) => {
        setModalImage(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalImage("");
        setModalIsOpen(false);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />

            {isError && <ErrorMessage />}

            {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} />}

            {isLoading && <Loader />}

            {totalPages && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}

            <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={modalImage}/>
        </div>
    )
}