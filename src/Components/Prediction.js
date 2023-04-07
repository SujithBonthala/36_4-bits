import React from "react";
import { useNavigate } from "react-router-dom";
import prediction from "./prediction.png";
import prediciton_2 from "./prediction_2.jpg";
import prediction_3 from "./predict_3.jpg";
import "./Predcition.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Prediction() {
  const navigate = useNavigate();
  return (
    <div class="container-fluid">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner imageContainer">
          <div className="carousel-item active">
            <img src={prediction} className="p1" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={prediciton_2} className="p2" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={prediction_3} className="p3" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Prediction;
