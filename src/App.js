/** @format */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import NotesButton from './components/NotesButton'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import Toggle from './components/Toggle'

import rootReducer from './rootReducer'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    {}, //initial state
    composeWithDevTools() //with middlewares
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <header className='App-header'>
                            <Link to='/'>
                                <img
                                    src={logo}
                                    className='App-logo'
                                    alt='logo'
                                />
                            </Link>
                        </header>
                        <Toggle />
                        <Switch>
                            <Route exact path='/' component={MovieList} />
                            <Route path='/:id' component={MovieDetail} />
                        </Switch>
                        <footer>
                            <NotesButton />
                        </footer>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App

// match is where params are stored in the react router
