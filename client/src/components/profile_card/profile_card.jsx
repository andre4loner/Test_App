
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./profile_card.css"
import image from '../../assets/images/image.png'

import axios from 'axios'


export default function ProfileCard() {
  const [user, setUser] = useState()
  const [skills, setSkills] = useState()
  const proficiencies = []
  const prof = new Set()
  const params = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3031/api/users/${params.username}`)
        setUser(res.data)

        res.data.strengths.map((e) => {
          prof.add(e.proficiency)
        })

        prof.forEach((p) => {
          proficiencies.push(
            {
              "name": p,
              "skills": []
            }
          )
        })

        res.data.strengths.map((e) => {
          proficiencies.map((p) => {
            if (e.proficiency === p.name) {
              p.skills.push(
                {
                  "id": e.id,
                  "name": e.name
                }
              )
            }
          })
        })
        setSkills(proficiencies)

        console.log(prof)
        console.log(proficiencies)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  return (
    user ?
      <div className="profile-card">
        <div className="avatar-name-title">
          <div className="avatar">
            <div className="outline">
              <img src={user.person.picture ? user.person.picture : image} alt="Profile Image" className="image"/>
            </div>
          </div>
          <div className="name-title">
            <h4 className="name">{user.person.name}</h4>
            <p className="title">{user.person.professionalHeadline}</p>
          </div>
        </div>

        <div className="skills-and-interests">
          <h2 className="title">Skills And Interests</h2>
          {
            user.strengths.length > 0 ?
              <div className="skills">
                  {
                    skills ?
                      skills.map((e) => {
                        return (
                          <div className="skill-category">
                            <h2 className="skill-title">{e.name.replaceAll('-', ' ').toUpperCase()}</h2>
                            <div className="entries">
                              {
                                e.skills.map((p) => {
                                  return (
                                    <p className="skill">
                                      {p.name}
                                    </p>
                                  )
                                })
                              }
                            </div>
                          </div>
                        )
                      })
                      :
                        ""
                  }
              </div>
              :
              <p className="no-skills">
                User has no skills
              </p>
          }
          
        </div>
      </div>
      :
      ""
  )
}