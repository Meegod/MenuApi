import React from 'react';
import './banner.css';

function Banner() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <a className="navbar-brand" href="#">
          Restaurant Northstreet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            {/* <li className="nav-item">
                        <a className="nav-link" href="#service">Service</a>
                    </li>  
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>   */}
          </ul>
        </div>
      </nav>

      <div className="jumbotron">
        <div className="container-fluid">
          <div className="header-content-inner">
            {/* <h1>Majestic Thai</h1>
            <h3>
              We are proud of our long history of making delicious meals, warm
              and friendly atmosphere and professional staff.
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
