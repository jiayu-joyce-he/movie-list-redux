/** @format */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleMessage } from '../actions'

const Toggle = ({ messageVisability, dispatch }) => {
    return (
        <div>
            {messageVisability && (
                <p>you will see this if redux action is toggle</p>
            )}
            <button onClick={() => dispatch(toggleMessage())}>
                {/* action creator */}
                Toggle Me{' '}
            </button>{' '}
        </div>
    )
}

const mapStateToProps = state => ({
    messageVisability: state.message.messageVisability
}) //taking a state and mapping it to a prop

const mapdispatchToProps = dispatch =>
    bindActionCreators(
        {
            toggleMessage: toggleMessage //take toggleMessage and turn it into a prop toggleMessage
        },
        dispatch
    )
// accept an object of all of our actions as the first argument and dispatch as the second argument

export default connect(mapStateToProps)(Toggle) //connecting Toggle to redux store
