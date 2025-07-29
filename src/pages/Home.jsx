import React from 'react'
import {useContext, useEffect} from 'react'
import { MovieContext } from '../context/MovieContext'
import MovieList from '../components/Movies/MovieList';
import SearchBar from '../components/UI/SearchBar';
import Pagination from '../components/UI/Pagination';

function Home() {

    const {movies, getPopularMovies,currentPage,totalPages, changePage} = useContext(MovieContext);
     useEffect(() => {
        getPopularMovies(1);
    }, [getPopularMovies])


  return (
    <div className='container mx-auto px-4 py-8 scroll-smooth'>
      <div className='max-w-lg mx-auto mb-8'>
        <SearchBar />
      </div>
      <MovieList movies={movies} />

      {/* Pagination  */}
     {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={changePage} />}
    </div>
  )
}

export default Home