/** @format */
import React, { Component } from 'react'

class Welcome extends Component {
    state = {
        input: ''
    }

    onChange = e => {
        this.setState({ input: e.target.value.trim() })
    }

    submit = () => {
        console.log(this.text.value)
        console.log(this.state.input)
    }

    render() {
        const { welcome, name } = this.props
        return (
            <div className='App'>
                <h1>{`${welcome}, ${name}!`}</h1>
                <h2>Controlled Input</h2>
                <a
                    href='https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/'
                    target='blank'
                >
                    Show value from Controlled Input using State
                </a>
                <br />
                <input
                    type='text'
                    onChange={this.onChange}
                    value={this.state.input}
                ></input>
                <button onClick={this.submit}>Submit to see State</button>
                <p>Show value from Uncontrolled Input using Ref</p>
                <input type='text' ref={input => (this.text = input)}></input>
                <button onClick={this.submit}>Submit to see Ref</button>
            </div>
        )
    }
}

export default Welcome
