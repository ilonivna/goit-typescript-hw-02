import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
    onClick: () => void;
}

const LoadMoreBtn:FC<LoadMoreBtnProps> =  ({ onClick }) => {
    return (
        <button className={css.button} type="button" onClick={onClick}>Load more</button>
    );
}

export default LoadMoreBtn;