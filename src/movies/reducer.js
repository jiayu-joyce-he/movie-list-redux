/** @format */
import { GET_MOVIES } from './actions'
import { GET_MOVIE } from './actions'
import { REST_MOVIE } from './actions'

const initialState = {
    movies: [],
    moviesLoaded: false,
    moviesLoadedAt: null, //timestamp
    movie: {},
    movieLoaded: false
}

export default function(state = initialState, action) {
    const { type, data } = action
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: data,
                moviesLoaded: true,
                moviesLoadedAt: new Date()
            }
        case GET_MOVIE:
            return {
                ...state,
                movie: data,
                movieLoaded: true
            }
        case REST_MOVIE:
            return {
                ...state,
                movie: {},
                movieLoaded: false
            }
        default:
            return state
    }
}
