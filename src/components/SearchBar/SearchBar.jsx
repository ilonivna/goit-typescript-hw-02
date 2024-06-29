import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css"



export default function SearchBar({ onSubmit }) {
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const input = form.elements.input.value;
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

