import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import { IoIosRocket } from "react-icons/io";
import blackhole from "../../assets/blackhole.png";

const Error = () => {
  return (
    <section className="error-page">
      <nav className="error-nav">
        <h1 className="error-header">
          <IoIosRocket className="rocket-icon" />
          Launch Lookout
        </h1>
      </nav>
      <div className="error-text">
        <h1>Failure to liftoff!</h1>
        <img
          className="blackhole-spinning-error"
          src={blackhole}
          alt={"blackhole spinning loading"}
        ></img>
        <Link to="/">
          <button className="error-back-to-main">Back to Main</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
