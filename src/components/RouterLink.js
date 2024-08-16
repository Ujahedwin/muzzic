import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Features from '../Pages/Features'
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import styles from './RouterLink.css'


const RouterLink = () => {
    return (
        <Router>
            <div className='container'>
                <nav className='nav'>
                    <div style={{ flex: 2 }}>
                        <ul>

                            <li>
                                <Link to="/">Muzic</Link>
                            </li>
                        </ul>


                    </div>
                    <div style={{ flex: 4 }}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/features">Features</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <ul>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/features' element={<Features />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router >
    )
}

export default RouterLink

