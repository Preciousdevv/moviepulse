import { createContext, useState, useEffect, useCallback, use } from "react";
import { fetchPopularMovies, searchMovie } from "../services/api";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getPopularMovies = useCallback(async (page = 1) => {
        try {
            const data = await fetchPopularMovies(page);
            // return data.results;
            setMovies(data.results);
            setCurrentPage(page);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.log(error);
        }
    }, [])
    const handleSearch = useCallback(async(query, page)=>{
        if(!query.trim()){
            return getPopularMovies(1);
        }
        try {
            const data = await searchMovie(query)
            setMovies(data.results);
            setSearchQuery(query);
            setCurrentPage(page);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.log(error);
        }
    }, [getPopularMovies])
   
    const changePage = useCallback((page)=>{
        window.scrollTo(0,0);
        if(searchQuery){
            handleSearch(searchQuery, page);
        }else{
            getPopularMovies(page);
        }
    }, [searchQuery, handleSearch, getPopularMovies])

    return(
        <MovieContext.Provider value={{movies, getPopularMovies, searchQuery, setSearchQuery, handleSearch, currentPage, changePage, totalPages}}>
            {children}
        </MovieContext.Provider>
    )

}