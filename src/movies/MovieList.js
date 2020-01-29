/** @format */

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies } from './actions'

function MovieList(props) {
    // const [movies, setMovies] = useState(props.movies)

    // const URL =
    //     'https://api.themoviedb.org/3/discover/movie?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

    // useEffect(() => {
    //     async function getMovies() {
    //         try {
    //             await fetch(URL)
    //                 .then(res => res.json())
    //                 .then(res => {
    //                     setMovies(res.results)
    //                     setIsloading(false)
    //                 })
    //         } catch (e) {
    //             console.log('error', e)
    //         }
    //     }
    //     getMovies()
    //     return () => {}
    // }, [URL])

    const { movies, getMovies } = props

    useEffect(() => {
        movies.length === 0 && getMovies()
    }, [])

    return (
        <>
            {movies.length === 0 ? (
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

const mapStateToProps = state => ({
    movies: state.movies.movies
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getMovies
        },
        dispatch
    ) //use the mapDispatchToProps so that we don't have to use dispatch; get our action which is get movies

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`
