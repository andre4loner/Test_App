
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/home/home.jsx'
import Profile from './pages/profile/profile.jsx'
import Opportunities from './pages/opportunities/opportunities.jsx'
import Results from './pages/results/results.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Search from './components/search/search.jsx'
import Footer from './components/footer/footer.jsx'


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>

          <Route
            path='/users/:username' element={
              <Profile />
            }>
          </Route>

          <Route
            path='/opportunities/:id' element={
              <Opportunities />
            }>
          </Route>

          <Route
            path='/_search' element={
              <Results />
            }>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
