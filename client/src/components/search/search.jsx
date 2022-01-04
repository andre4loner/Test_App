
import React from 'react'
import './search.css'

export default function Search() {
  return (
    <div className="search">
      <form action="/_search">
        <div className="field-and-button">
          <input
            type="text"
            id="search"
            name="query"
            className="search-field"
            placeholder="Search for people or jobs..."
            required
          />
          <button type="submit" className="search-button">
            <i className ="fas fa-search"></i>
          </button>
        </div>

        <div className="radios">
          <label className="container" htmlFor="people">
            People
            <input id="people" type="radio" name="radio" value="people" required/>
            <span className="checkmark"></span>
          </label>
          <label className="container" htmlFor="jobs">
            Jobs
            <input id="jobs" type="radio" name="radio" value="jobs" required/>
            <span className="checkmark"></span>
          </label>
        </div>
      </form>
    </div>
  )
}