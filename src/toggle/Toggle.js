/** @format */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMessage } from './actions'

const Toggle = ({ messageVisability, toggleMessage, getMovies }) => {
    return (
        <div>
            {messageVisability && (
                <p>you will see this if redux action is toggle</p>
            )}
            {/* <button onClick={() => dispatch(toggleMessage())}> */}
            {/* the line above is using dispatch and the one below is using mapDispatchToProps; note that onClick can just call toggleMessage instead of a funciton () => {toggleMessage()} */}
            <button onClick={toggleMessage}>Toggle Me</button>
        </div>
    )
}

const mapStateToProps = state => ({
    messageVisability: state.toggle.messageVisability
}) //taking a state and mapping it to a prop

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        // accept an object of all of our actions as the first argument and dispatch as the second argument
        {
            toggleMessage //take toggleMessage and turn it into a prop toggleMessage, same as toggleMessage: toggleMessage
        },
        dispatch // the action creator will take an object which will include the property of what the new action prop will be named as well as the action you're importing. The toggle messaged imported will be set to this.props.toggleMessage and we will bind you to dispatch
        // now we can call toggleMessage to dispatch the action without calling dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Toggle) //connecting Toggle to redux store
