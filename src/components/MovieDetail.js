/** @format */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movie'
import axios from 'axios'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

export default function MovieDetail({ match }) {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsloading] = useState(true)

    const URL = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US`

    useEffect(() => {
        setIsloading(true)
        axios.get(URL).then(({ data }) => {
            setMovie(data)
            setIsloading(false)
        })
        return () => {
            console.log('clean up here')
        }
    }, [URL])

    // console.log('here movie', movie)
    const movieInfo = () => {
        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                {/* pass in backdrop data as a prop */}
                <MovieInfo>
                    <Overdrive id={movie.id}>
                        <Poster
                            src={`${POSTER_PATH}${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </Overdrive>
                    <div>
                        <h1>{movie.title}</h1>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        )
    }

    return <>{isLoading ? <h1>Loading...</h1> : movieInfo()}</>
}

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`
