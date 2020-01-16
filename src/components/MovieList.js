/** @format */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Movie from './Movie'

export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsloading] = useState(true)

    URL =
        'https://api.themoviedb.org/3/discover/movie?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

    useEffect(() => {
        async function getMovies() {
            try {
                await fetch(URL)
                    .then(res => res.json())
                    .then(res => {
                        setMovies(res.results)
                        setIsloading(false)
                    })
            } catch (e) {
                console.log(e)
            }
        }
        getMovies()
        return () => {}
    }, [URL])

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <MovieGrid>
                    {movies.map(movie => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </MovieGrid>
            )}
        </>
    )
}

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`

//
