import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css"
import { FC, FormEvent } from "react";


interface SearchBarProps {
    onSubmit: (value: string) => void;
}

const SearchBar:FC<SearchBarProps> = ({ onSubmit }) => {
    
    const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const inputField = form.elements.namedItem("input") as HTMLInputElement;
        const input = inputField.value;
        if (input.trim() === "") {
            toast.error('Please, type anything in search bar and I will find it for you');
            return;
        }
        onSubmit(input);
        form.reset();
    }
    
    return (
        <header>
        <div><Toaster/></div>
    <form  onSubmit={handleSubmit}>
    <input
    className={css.input}
      type="text"
      name="input"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={css.button} type="submit">Search</button>
    </form>
</header>
    )
}

export default SearchBar;