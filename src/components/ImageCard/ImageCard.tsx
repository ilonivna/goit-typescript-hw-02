import { FC } from "react";
import { Image } from "../App/App.types";

interface ImageCardProps {
    urls: {
        small: string;
    };
    description: string | undefined;
    onClick: (small: string) => void;
}




export const ImageCard: FC<ImageCardProps> = ({ urls: { small }, description, onClick }) => {
    const handleClick = (): void => {
        onClick(small)
    }
    return (
        <div>
  <img src={small} alt={description} onClick={handleClick}/>
</div>
    )
}