import "./MovieCard.css"
import { useNavigate } from "react-router"

const MovieCard = ({Title, Year, imdbID, poster}) => {
    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/movie/${imdbID}`)
    }




    return (
        <div onClick={handleClick} className="movie-card">
            <h4 className="movie-card__title">{Title}</h4>
            <img src={poster} alt="" className="movie-card__image" />
            <div className="movie-card__year">{Year}</div>
        </div>
    )
}

export default MovieCard