import { RiSearch2Line } from "@remixicon/react"
import {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext'

function SearchBar() {
  const {handleSearch, searchQuery, setSearchQuery} = useContext(MovieContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleSearch(searchQuery);
  

  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="relative">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Search Movies' className='w-full bg-white/10 rounded-lg border border-gray-300  focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-all shadow-sm dark:text-white' />
            <RiSearch2Line className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors' onClick={handleSubmit} />
         
        </div>
    </form>
  )
}

export default SearchBar