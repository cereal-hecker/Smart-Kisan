import {NavLink} from "react-router-dom"

export default function Navbar() {

    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="">smartKisan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    )
  }