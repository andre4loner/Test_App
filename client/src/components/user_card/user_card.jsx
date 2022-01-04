
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './user_card.css'
import image from '../../assets/images/image.png'

export default function UserCard({ info }) {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(info)
  })

  return (
    <Link to={`/users/${info.username}`} className="user-card-container">
      <div className="user-card">
        <div className="avatar-name-title">
          <div className="avatar">
            <div className="outline">
              <img src={
                info.picture
                  ? info.picture
                  : image
              } alt="Profile Image" className="image" />
            </div>
          </div>
          <div className="name-title">
            <h4 className="name">{info.name}</h4>
            <p className="title">{info.professionalHeadline}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}