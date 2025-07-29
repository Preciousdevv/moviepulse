import { API_KEY, BASE_URL } from "./config";

export const fetchPopularMovies = async (page=1) => {
    try {
      // https://api.themoviedb.org/3/discover/movie?api_key=778dcf02894f40ff2a5de48a0a87f49e
     const response = await fetch(
       `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
     );
     if(!response.ok){
        throw new Error('Failed to fetch movies');
     }
     const data = await response.json();
    //  console.log(data.results);
     return data;

     
    } catch (error) {
        console.log(error);
        throw error;        
    }
}

    export const fetchMovieDetail = async(id)=>{
      try {
        
       const response = await fetch(
         `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,similar`
       );
       if(!response.ok){
          throw new Error('Failed to fetch movie detail');
       }
       const data = await response.json();
      //  console.log(data);
       
       return data;
      } catch (error) {
        console.log(error);
      }
        
    }

    // search movie api 
    export const searchMovie = async(query, page=1)=>{
        try {
            const response = await fetch(
              `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
            );
            if(!response.ok){
               throw new Error('Failed to fetch movie detail');
            }
            const data = await response.json();
           //  console.log(data);
            
            return data;
           } catch (error) {
             console.log(error);
           }
    } 