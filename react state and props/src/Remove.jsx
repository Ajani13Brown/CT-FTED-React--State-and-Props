import React, { useState } from 'react';

const Remove = () => {
    const [movies, setMovies] = useState([
        { title: "Arrival", description: "A sci-fi drama about first contact with aliens." },
        { title: "Bladerunner 2049", description: "A neo-noir sci-fi sequel to Bladerunner." },
        { title: "The Nice Guys", description: "A buddy cop comedy set in the 70s." },
        { title: "Avengers", description: "A superhero film featuring Marvel's Avengers." },
        { title: "Little Fish", description: "A drama about memory loss in a pandemic." }
    ]);

    const removeMovie = (index) => {
        const updatedMovies = [...movies.slice(0, index), ...movies.slice(index + 1)];
        setMovies(updatedMovies);
    };

    return (
        <div>
            <h2>Movies List</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie.title}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Remove;
