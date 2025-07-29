import {useState, useEffect, useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import { BASE_IMAGE_URL, POSTER_SIZE, UNAVAILABLE, BACKDROP_SIZE } from '../services/config'
import { fetchMovieDetail } from '../services/api'
import MovieTrailer from '../components/Movies/MovieTrailer'
import SimilarMovies from '../components/Movies/SimilarMovies'

function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const {id} = useParams()

    const getMovieDetail = async()=>{
        try {
            const data = await fetchMovieDetail(id);
            console.log(data);
            
            setMovie(data);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getMovieDetail();
    }, [id])

    const backdropUrl = movie.backdrop_path ? `${BASE_IMAGE_URL}/${BACKDROP_SIZE}/${movie.backdrop_path}` :null;
    const posterUrl = movie.poster_path ? `${BASE_IMAGE_URL}/${POSTER_SIZE}/${movie.poster_path}` : UNAVAILABLE;
    const trailer = movie.videos?.results?.find(video => video.type === "Trailer" && video.site === "YouTube") || movie.videos?.results?.[0]; 
  return (
    <div>
        {backdropUrl &&(
            <div className='relative h-[40vh] w-full md:h-[50vh] lg:h-[60vh] overflow-hidden'>
                <div className='absolute inset-0 bg-cover bg-center opacity-50'
                 style={{backgroundImage: `url(${backdropUrl})`}}>
                 </div>
                 <div className='absolute inset-0 bg-gradient-to-t to-transparent from-gray-900/90 dark:from-black dark:via-black/90'></div>
            </div>
        )}
        <div className='container mx-auto px-4 py-8 relative z-10 -mt-20 md:-mt-32'>
           <div className='flex flex-col md:flex-row gap-8'>
            {/* poster  */}
                <div className='w-full md:w-1/3 lg:w-1/4 flex-shrink-0'>
                    <div className='rounded-lg overflow-x-hidden shadow-xl bg-white dark:bg-gray-800 animate-fade-in'>
                         <img src={posterUrl} alt={movie.title} className='w-full h-auto' />
                    </div>
                </div>

                {/* content  */}
                <div className='w-full md:w-2/3 lg:w-3/4'>

                {/* title  */}
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white md:text-white mb-2'>{movie.title}
                        <span>({new Date(movie.release_date).getFullYear()})</span>
                        </h1>

                        {/* overview */}
                        <div className='mb-8 mt-24'>
                            <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>Overview</h3>
                            <p>{movie.overview}</p>
                        </div>
                </div>
           </div>

           {/* trailer  */}
           {trailer &&(
            <div>
                <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>Trailer</h2>
                <MovieTrailer id={trailer.key} />
            </div>
           )}
        </div>

        {/* similar movie  */}
        {movie.similar?.results?.length > 0 &&(
            <div className='mt-12 px-4'>
                <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>Similar movies</h2>
                <SimilarMovies movies={movie.similar.results.slice(0,6)} />
            </div>
        )}

    </div>
  )
}

export default MovieDetails