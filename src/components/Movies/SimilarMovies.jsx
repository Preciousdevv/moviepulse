import React from 'react'
import MovieCard from './MovieCard'

function SimilarMovies({movies}) {
    if (!movies || movies.length == 0) {
        return <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">No movie found</h2>
        </div>
    }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:grid-cols-6'>
        {movies.map(movie =>{
            return <MovieCard key={movie.id} movie={movie} />
        })}
    </div>
  )
}

export default SimilarMovies