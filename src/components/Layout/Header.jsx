import React from 'react'
import logo from '../../assets/movie-icon.svg'
import { RiSunLine, RiMoonLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import {ThemeContext} from '../../context/ThemeContext'
import {useContext} from 'react'

function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <header className=' sticky  top-0 z-50 backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 shadow-sm flex justify-between items-center p-4'>
        <Link to="/" className ="flex items-center text-2xl font-bold space-x-2">
            <img src={logo} alt="icon" className='w-8 h-10 ' /> <span> MoviePulse</span>
        </Link>
        <button onClick={toggleTheme} className='flex item-center space-x-4'>
          {theme === "dark" ?<RiSunLine  />:<RiMoonLine  />}
      
        </button>
    </header>
  )
}

export default Header