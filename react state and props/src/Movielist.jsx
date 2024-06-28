import React, { useState } from 'react'

// Task 1
const Movielist = () => {
    const [movies,setMovies] = useState([
        "Arrival",
        "Bladerunner 2049",
        "The Nice Guys",
        "Avengers",
        "Little Fish"
    ]);
    
    return (
        <div>
            <h2>Movielist</h2>
            <ul>
            {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
            ))}
        </ul>
        </div>
  )
};

export default Movielist