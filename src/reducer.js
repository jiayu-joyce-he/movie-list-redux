/** @format */

const initialState = {
    messageVisability: false
}

export default function(state = initialState, action) {
    const { type } = action
    switch (type) {
        case 'TOGGLE_MESSAGE':
            return {
                ...state,
                messageVisability: !state.messageVisability
            }
        default:
            return state
    }
}
