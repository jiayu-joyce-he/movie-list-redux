/** @format */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import NotesButton from './components/NotesButton'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <header className='App-header'>
                        <Link to='/'>
                            <img src={logo} className='App-logo' alt='logo' />
                        </Link>
                    </header>
                    <Switch>
                        <Route exact path='/' component={MovieList} />
                        <Route path='/:id' component={MovieDetail} />
                    </Switch>
                    <footer>
                        <NotesButton />
                    </footer>
                </div>
            </Router>
        )
    }
}

export default App

// match is where params are stored in the react router
