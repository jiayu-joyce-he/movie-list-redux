/** @format */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movie'
import axios from 'axios'
import useAbortableFetch from 'use-abortable-fetch'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

export default function MovieDetail({ match }) {
    // const [movie, setMovie] = useState({})
    // const [isLoading, setIsloading] = useState(true)
    // Approach 1, using useAbortableFetch
    const { data, loading } = useAbortableFetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US`
    )
    if (!data) return null

    // Approach 2, using axios
    // const URL = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US`

    // useEffect(() => {
    //     setIsloading(true)
    //     axios.get(URL).then(({ data }) => {
    //         setMovie(data)
    //         setIsloading(false)
    //     })
    //     return () => {
    //         console.log('clean up here')
    //     }
    // }, [URL])

    const movieInfo = () => {
        return (
            <MovieWrapper backdrop={`${BACKDROP_PATH}${data.backdrop_path}`}>
                {/* pass in backdrop data as a prop */}
                <MovieInfo>
                    <Overdrive id={String(data.id)}>
                        <Poster
                            src={`${POSTER_PATH}${data.poster_path}`}
                            alt={data.title}
                        />
                    </Overdrive>
                    <div>
                        <h1>{data.title}</h1>
                        <h3>{data.release_date}</h3>
                        <p>{data.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        )
    }

    return <>{loading ? <h1>Loading...</h1> : movieInfo()}</>
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
