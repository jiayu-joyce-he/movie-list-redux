/** @format */
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE = 'GET_MOVIE'
export const REST_MOVIE = 'REST_MOVIE'

export function getMovies() {
    return async function(dispatch) {
        // return an async function that can dispatch an action
        const res = await fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
        )
        const movies = await res.json()
        // after the data arrive, dispatch an action of GET_MOVIES and set the data to be movies.results
        return dispatch({
            type: 'GET_MOVIES',
            data: movies.results
        })
    }
}

export function getMovie(id) {
    return async function(dispatch) {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=8af2e71d16e6f0c56c4fc2459a322487&language=en-US`
        )
        const movie = await res.json()
        return dispatch({
            type: 'GET_MOVIE',
            data: movie
        })
    }
}

export function resetMovie() {
    return {
        type: 'REST_MOVIE'
    }
}
