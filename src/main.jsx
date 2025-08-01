import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
<ThemeProvider>
    <MovieProvider>
    <App />
  </MovieProvider>,
</ThemeProvider>
)
