/** @format */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movie'
// import axios from 'axios'
import useAbortableFetch from 'use-abortable-fetch'
import { useSpring, animated } from 'react-spring'

import { bindActionCreators } from 'redux'
import { getMovie, resetMovie } from './actions'
import { connect } from 'react-redux'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

function MovieDetail({ match, getMovie, resetMovie, data, movieLoaded }) {
    // const [isLoading, setIsloading] = useState(true)
    // Approach 1, using useAbortableFetch
    // const { data, loading, error } = useAbortableFetch(
    //     `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US`
    // )

    const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } })

    // if (!data) return null

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

    // Approach 3, use redux
    useEffect(() => {
        !movieLoaded && getMovie(match.params.id)
        return () => {
            resetMovie() //clean up
        }
    }, [match.params.id])

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
                    <animated.div style={animationProps}>
                        <h1>{data.title}</h1>
                        <h3>{data.release_date}</h3>
                        <p>{data.overview}</p>
                    </animated.div>
                </MovieInfo>
            </MovieWrapper>
        )
    }

    return (
        <>
            {/* {error ? (
                <h1>Error: {error.message}</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                data && movieInfo()
            )} */}
            {!movieLoaded ? <h1>Loading...</h1> : movieInfo()}
        </>
    )
}

const mapStateToProps = state => ({
    data: state.movies.movie,
    movieLoaded: state.movies.movieLoaded
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getMovie, resetMovie }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)

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
