
import React, { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import './results.css'
import UserCard from '../../components/user_card/user_card.jsx'
import JobCard from '../../components/job_card/job_card.jsx'

export default function Results() {
  const [results, setResults] = useState()
  const { search } = useLocation()

  const useQuery = () => {
    return useMemo(() => new URLSearchParams(search), [search])
  }
  const query = useQuery()

  useEffect(() => {
    const fetchResults = async () => {
      const data = {
        "query": query.get('query'),
        "radio": query.get('radio')
      }
      const res = await axios.post(`https://torre-junior-test.herokuapp.com/api/_search/`, data,
      {
        headers: {
          "Content-Type": "application/json",
        }
      })
      setResults(res.data)
    }
    fetchResults()
  }, [])

  return (
    <div className="results-container">
      <h2 className="results-header">
        Search results for "<span>{query.get('query')}</span>"
      </h2>
      {
        results ?
          results.data.length > 0 ?
            results.selection === "people" ?
              results.data.map((e) => {
                return (
                  <UserCard info={e} />
                )
              })
              :
              results.data.map((e) => {
                return (
                  <JobCard info={e} />
                )
              })
            :
            <span className="no-results">"No results found for that search term. Please try again.</span>
          :
            ""
      }
    </div>
  )
}