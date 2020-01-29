/** @format */
import { TOGGLE_MESSAGE } from './actions'

const initialState = {
    messageVisability: false
}

export default function(state = initialState, action) {
    const { type } = action
    switch (type) {
        // case 'TOGGLE_MESSAGE':  //this can be replaced since we imported TOGGLE_MESSAGE; prevent typos and bugs; will fails if there's typo, but wont if using a string
        case TOGGLE_MESSAGE: // this is called action type constant
            return {
                ...state,
                messageVisability: !state.messageVisability
            }

        default:
            return state
    }
}
