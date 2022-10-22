import {NavLink} from "react-router-dom"

export default function Navbar() {

    return (
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="">smartKisan</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink to="/"><a className="nav-link">Home</a></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/dashboard"><a className="nav-link" href="/dashboard">Dashboard</a></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    )
  }