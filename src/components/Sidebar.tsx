import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
		<nav id="sidebar" className="sidebar js-sidebar">
    <div className="sidebar-content js-simplebar">
<Link to='/'>
      <span className="sidebar-brand" >
        <span className="align-middle">My Music App</span>
      </span>
        </Link>

      <ul className="sidebar-nav">
        <li className="sidebar-header">
          Pages
        </li>

<Link to='/'>
        <li className="sidebar-item">
          <span className="sidebar-link" >
            <i className="align-middle" data-feather="sliders"></i>
            <span className="align-middle">Home</span>
          </span>
        </li>
        </Link>

<Link to='/search'>
        <li className="sidebar-item">
          <span className="sidebar-link" >
            <i className="align-middle" data-feather="user"></i>
            <span className="align-middle">Search</span>
          </span>
        </li>
        </Link>

<Link to='/favourites'>
        <li className="sidebar-item">
          <span className="sidebar-link" >
            <i className="align-middle" data-feather="log-in"></i>
            <span className="align-middle">Favourites</span>
          </span>
        </li>
        </Link>

<Link to='/playlists'>
        <li className="sidebar-item">
          <span className="sidebar-link" >
            <i className="align-middle" data-feather="user-plus"></i>
            <span className="align-middle">Playlists</span>
          </span>
        </li>
        </Link>

      </ul>

    </div>
  </nav>
  )
}

export default Sidebar