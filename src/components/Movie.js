/** @format */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
// this is specific to the tmdb API

export default function Movie({ movie }) {
    // object deconstruct movie from the props
    return (
        <Link to={`/${movie.id}`}>
            <Overdrive id={String(movie.id)}>
                <Poster
                    src={`${POSTER_PATH}${movie.poster_path}`}
                    alt={movie.title}
                />
            </Overdrive>
            {/* <p>{movie.overview}</p>
            <p>Average Votes: {movie.popularity}</p>
            <p>Released on: {movie.release_date}</p> */}
        </Link>
    )
}

// instead of static propTypes, use Movie.propTypes
Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`

// Class Component:
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export default class Movie extends Component {
//     static propTypes = {
//         // movie: PropTypes.object
//         // movie: PropTypes.object //this will throw a waring
//         movie: PropTypes.shape({
//             // title: PropTypes.string
//             title: PropTypes.string.isRequired,
//             overview: PropTypes.string
//         }) //this checks the content of the prop
//     }

//     static defaultProps = {
//         movie: {
//             overview: 'Description not available',
//             release_date: 'release_date not available'
//         }
//     }
//     // Static properties are properties of a class, not of an instance of a class. This means it's shared across instances vs states are not

//     render() {
//         return (
//             <div>
//                 <h3>{this.props.movie.title}</h3>
//                 <p>{this.props.movie.overview}</p>
//                 <p>Average Votes: {this.props.movie.popularity}</p>
//                 <p>Released on: {this.props.movie.release_date}</p>
//             </div>
//         )
//     }
// }
