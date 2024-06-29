export default function ImageCard({ urls: { small }, description, onClick }) {
    const handleClick = () => {
        onClick(small)
    }
    return (
        <div>
  <img src={small} alt={description} onClick={handleClick}/>
</div>
    )
}