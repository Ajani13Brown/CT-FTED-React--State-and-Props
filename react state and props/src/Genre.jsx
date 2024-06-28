import React, { useState } from 'react'

const Genre = () => {
    const [movies, setMovies] = useState([
        { title: "Arrival", description: "A sci-fi drama about first contact with aliens.", genre: "Sci-Fi" },
        { title: "Bladerunner 2049", description: "A neo-noir sci-fi sequel to Bladerunner.", genre: "Sci-Fi" },
        { title: "The Nice Guys", description: "A buddy cop comedy set in the 70s.", genre: "Comedy" },
        { title: "Avengers", description: "A superhero film featuring Marvel's Avengers.", genre: "Action" },
        { title: "Little Fish", description: "A drama about memory loss in a pandemic.", genre: "Drama" }
    ]);

    const [expandedMovie, setExpandedMovie] = useState(null);
    const [genreFilter, setGenreFilter] = useState(null);

    const toggleDescription = (index) => {
        setExpandedMovie(expandedMovie === index ? null : index);
    };

    const removeMovie = (index) => {
        setMovies(prevMovies => prevMovies.filter((_, i) => i !== index));
    };

    const toggleGenre = (genre) => {
        setGenreFilter(genre === genreFilter ? null : genre);
    };

    return (
        <div>
            <h2>Movies List</h2>
            <button onClick={() => toggleGenre(null)}>All Movies</button>
            <button onClick={() => toggleGenre("Action")}>Action Movies</button>
            <ul>
                {movies
                    .filter(movie => genreFilter === null || movie.genre === genreFilter)
                    .map((movie, index) => (
                        <li key={index} onClick={() => toggleDescription(index)}>
                            {movie.title}
                            {expandedMovie === index && <p>{movie.description}</p>}
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Genre