/** @format */
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE' //export to use in the reducer

// redux-thunk allows us to return a function from an action

export function toggleMessage() {
    return {
        type: 'TOGGLE_MESSAGE'
    }
}
