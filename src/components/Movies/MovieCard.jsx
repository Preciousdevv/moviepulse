import {useState} from 'react'
import { BASE_IMAGE_URL, POSTER_SIZE, UNAVAILABLE } from '../../services/config';
import { RiStarFill } from '@remixicon/react';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
const [isHovered, setIsHovered] = useState(false);
const posterPath = movie.poster_path ? `${BASE_IMAGE_URL}/${POSTER_SIZE}/${movie.poster_path}` : UNAVAILABLE;

  return (
    <Link to={`/movie/${movie.id}`} className='group relative rounded-lg bg-white hover:shadow-xl shadow-lg dark:bg-gray-800 transition-all overflow-hidden'>
        <div className='relative aspect-[2/3] overflow-hidden'>
            <img src={posterPath} alt={movie.title}
            className='w-full h-full object-cover hover:scale-110 transition-all duration-300' />
        </div>
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-gray-900 dark:text-white ' >{movie.title}</h3>
                <div className='flex items-center bg-red-500 rounded-full px-2 py-1'>
                    <RiStarFill className='text-yellow-400 w-4' />
                     <span className='ml-1 text-sm font-medium text-white'>{movie.vote_average? movie.vote_average.toFixed(1) : ''}</span>
                </div>
               
            </div>
        </div>
        
    </Link>
  )
}

export default MovieCard