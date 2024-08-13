import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
                style={{ '--bs-scroll-height': '100px' }}  // Changed: The style prop should be an object, not a string
            >
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search"> 
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
        </div>
    </div>
</nav>
</>
  )
}
