
import React from 'react'
import './footer.css'

export default function Footer(){
  return (
    <div className="footer">
      <div className="section">
        <h3 className="title">Site Navigation</h3>
        <ul className="links">
          <li className="link">Home</li>
          <li className="link">Jobs</li>
          <li className="link">About</li>
          <li className="link">Contact Us</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="title">Support</h3>
        <ul className="links">
          <li className="link">Frequently Asked Questions</li>
          <li className="link">Help</li>
          <li className="link">Report A Bug</li>
          <li className="link">Speak With A Rep.</li>
        </ul>
      </div>

      <div className="section">
        <h3 className="title">Careers</h3>
        <ul className="links">
          <li className="link">Apply</li>
          <li className="link">Roles</li>
          <li className="link">Offices</li>
          <li className="link">Company Policies</li>
        </ul>
      </div>
    </div>
  )
}