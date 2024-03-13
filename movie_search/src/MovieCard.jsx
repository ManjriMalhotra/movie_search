// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const MovieCard = () => {

// const [data, setData] = useState(null);


// function fetchData(){
//     try {
//         const response = axios.get("https://api.themoviedb.org/3/movie/popular?api_key=58d99a5a55f4ef4b035889eb89171b68")
//         .then((data)=>{
//             const n = data.data.results.length
//             console.log(n)
//             data.data.results.map((item)=>{
//             setData(item)
//             console.log(item.title)
//             })

//         // console.log(response)
//         })
//     }
//     catch (error) {
//         console.log(`error occured ${error}`)
//     }
    
// }
// fetchData();

// return (
//     <>
//     <h1>
//     </h1>
    
//     </>
// )
// }


// export default MovieCard

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MovieCard = () => {
const [data, setData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=58d99a5a55f4ef4b035889eb89171b68");
        console.log(data)

        setData(response.data.results); // Set the results array to the data state

    }catch (error) {
        console.log(`Error occurred: ${error}`);
    }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

return (
    <div>
    <h1>Popular Movies</h1>
    {data && data.map((movie) => (
        <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        </div>
    ))}
    </div>
);
};

export default MovieCard;
