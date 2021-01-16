import React from 'react'

export default function nav() {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a className="navbar-brand" href="../index.html">Greyson Kirk</a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" href="./portfolio.html">Portfolio<span className="sr-only">(current)</span></a>
                <a className="nav-link" href="./contact.html">Contact </a>
                <a className="nav-link  " href="./about.html">About </a>
            </div>
            <div className="navbar-nav" id="navbarNavAltMarkup">
                <a className="nav-link" href="https://github.com/greysonkirk?tab=repositories" target="_blank"  rel="noreferrer"><i className=" fab fa-github"></i></a> 
                <a className="nav-link" href="https://www.linkedin.com/in/greysonkirk/" target="_blank"  rel="noreferrer"><i className="fab fa-linkedin"></i></a>

            </div>
        </div>
    </nav>
    )
}
