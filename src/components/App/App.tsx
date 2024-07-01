import { useEffect, useState, FC } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../images-api";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import "./App.types";
import { Data, Image } from "./App.types";








export default function App() {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string>("");

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return;
        }

        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const { results, total }: Data = await getImages(searchQuery, page);
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

    const handleSearch = async (input: string) => {
        setSearchQuery(input);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = async () => {
        setPage(page + 1);
    }

    const openModal = (imageUrl:string): void => {
        setModalImage(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
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