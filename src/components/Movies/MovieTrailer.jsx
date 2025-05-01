import React from 'react'

function MovieTrailer({id}) {
    if(!id) return null
  return (
    <div className='w-full aspect-video rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl'>
        <iframe src={`https://www.youtube.com/embed/${id}`} title="Movie Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='w-full h-full'></iframe>
    </div>
  )
}

export default MovieTrailer