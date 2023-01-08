import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends Component {
 

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">NewsMania</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/sport">Sport</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/technology">Technology</Link>
        </li>
      
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
