/** @format */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import NotesButton from './movies/NotesButton'
import MovieList from './movies/MovieList'
import MovieDetail from './movies/MovieDetail'
import Toggle from './toggle/Toggle'

import rootReducer from './rootReducer'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const middleware = [logger, ReduxThunk] // an array of middleware

const store = createStore(
    rootReducer,
    {}, //initial state
    composeWithDevTools(applyMiddleware(...middleware)) //with middlewares; applyMiddleware accepts different middleware
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
