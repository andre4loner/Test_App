
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './job_card.css'
import image from '../../assets/images/company.png'

export default function JobCard({ info }) {
  const [job, setJob] = useState()

  useEffect(() => {
    setJob(info)
  }, [])

  return (
    job ?
      <Link to={`/opportunities/${job.id}`} className="user-card-container">
        <div className="job-card">
          <div className="avatar-name-title">
            <div className="name-title">
              <h4 className="name">{job.objective}</h4>
              <p className="title">{job.organizations[0].name}</p>
            </div>
            <div className="avatar">
              <div className="outline">
                <img src={
                  job.organizations[0].picture
                    ? job.organizations[0].picture
                    : image
                } alt="Profile Image" className="image" />
              </div>
            </div>
          </div>
          
          <p className="desc">
            {
              job.tagline ?
                job.tagline
              :
                "This job has no description."
            }
          </p>

          <div className="features">
            <span className="sect">
              <i class="fas fa-money-bill-alt"></i>
              {
                job.compensation ?
                  job.compensation.data ?
                    job.compensation.data.currency + " " + (
                      job.compensation.data.code === "range" ?
                        job.compensation.data.minAmount.toLocaleString() + " - " + job.compensation.data.maxAmount.toLocaleString()
                        :
                          job.compensation.data.minAmount.toLocaleString()
                    ) + " per " + job.compensation.data.periodicity.slice(0, -2)
                    : "No compensation listed"
                  : "No compensation listed"
              }
            </span>
            <span className="sect">
              <i class="fas fa-globe"></i>
              {
                job.remote ?
                  "Remote"
                  : "Not Remote"
              }
            </span>
          </div>
        </div>
      </Link>
      : ""
  )
}