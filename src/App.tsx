import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Playlists from './pages/Playlists';

function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <Sidebar/>

		<div className="main">
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <i className="align-middle" data-feather="settings"></i>
            </a>

            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
              <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">User Name</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {/* <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i> Profile</a>
              <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="/logout">Log out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <main className="content">
          <Routes>
            <Route
              path='/'
              element={ <Home/> }
            />
            <Route
              path='/search'
              element={ <Search/> }
            />
            <Route
              path='/favourites'
              element={ <Favourites/> }
            />
            <Route
              path='/playlists'
              element={ <Playlists/> }
            />
            {/* <Route
              path='/login'
              element={!user ? <Login/>: <Navigate to="/"/>}
            />
            <Route
              path='/register'
              element={!user ? <Register/>: <Navigate to="/"/>}
            /> */}
          </Routes>
    </main>

    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-start">
            <p className="mb-0">
              Footer
            </p>
          </div>
          <div className="col-6 text-end">
          </div>
        </div>
      </div>
    </footer>
  </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
