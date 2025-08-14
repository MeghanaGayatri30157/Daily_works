import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <u1 className='sidebar'>
            <li><Link to="/"> About </Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li>Profile</li>
            <li>Register</li>
            <li>Contact Us</li>
        </u1>
      </div>
    )
  }
}

