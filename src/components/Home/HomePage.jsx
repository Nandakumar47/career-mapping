import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import background from "./background.jpg";


function HomePage() {
  return (
    <div className="home__mainPage">
      <div className="first__section">
        <div className="quote__section">
          <h2>
            “Education is the most powerful weapon which you can use to change
            the world” – Nelson Mandela
          </h2>
          <img src={background} alt="" />
        </div>
      </div>
      <div className="second__section">
        <div className="second__section__top">
          <p>Choose a Path..</p>
          <hr />
        </div>
        <div className="second__section__bottom">
          <div className="card__mainDiv">
            <Link to="/BiologyScience">
              <div className="cards">
                <p>Biology Science</p>
              </div>
            </Link>
            <Link to="/ComputerScience">
              <div className="cards">
                <p>Computer Science</p>
              </div>
            </Link>
            <Link to="/Commerce">
              <div className="cards">
                <p>Commerce </p>
              </div>
            </Link>
            <Link to="/Humanities">
              <div className="cards">
                <p>Humanities </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
