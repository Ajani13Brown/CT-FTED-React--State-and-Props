import React, { useState } from 'react'


const Descriptions = () => {
    const [moviesDescr, setMoviesDescr] = useState([
        { title: "Arrival", description: "A sci-fi drama about first contact with aliens." },
        { title: "Bladerunner 2049", description: "A neo-noir sci-fi sequel to Bladerunner." },
        { title: "The Nice Guys", description: "A buddy cop comedy set in the 70s." },
        { title: "Avengers", description: "A superhero film featuring Marvel's Avengers." },
        { title: "Little Fish", description: "A drama about memory loss in a pandemic." }
    ]);

    const [expandedMovie, setExpandedMovie] = useState(null);

    const toggleDescription = (index) => {
        setExpandedMovie(expandedMovie === index ? null : index);
    };
        
  return (
    <div>
            <h2>Movies List</h2>
            <ul>
                {moviesDescr.map((movie, index) => (
                    <li key={index} onClick={() => toggleDescription(index)}>
                        {movie.title}
                        {expandedMovie === index && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Descriptions