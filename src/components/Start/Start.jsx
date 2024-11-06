import React from "react";
import { Link } from "react-router-dom";
import "./start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="start__grid">
        <div className="start__text">
          <h1 className="text-info fw-bold">Ready To Start Your Mining</h1>
          <p>
            Create an account on our website with copy trading to help maximze
            profit
          </p>
        </div>
        <div className="start__btn">
          <Link to="register" className="btn btn-info text-sec">
            Start Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
