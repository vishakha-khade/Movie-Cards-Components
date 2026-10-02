import "./Card.css";

function Movie({index, movie}) {

    console.log(movie);
    return(
        <div>
        <div className="card">
            
            <h2 className="movie-name">{movie.movie}</h2>
            <img src={movie.image} alt={movie.movie} className="image"/>
            <p className="description">Description: {movie.description}</p>
            <p className="director">Director: {movie.director}</p>
            <p className="rating">Rating: {movie.rating}</p>

        </div>
        </div>
    );
}


export default Movie