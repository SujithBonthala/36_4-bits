import React from "react";
import { useNavigate } from "react-router-dom";
import barchart from "./bar-graph.png";
import piechart from "./pie-chart.png";
import radarchart from "./radar-chart.png";
import "./Performance.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Performance() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/image1")
      .then((res) => {
        setChartData(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            <div>
              {chartData && (
                <img
                  src={`data:image/png;base64,${chartData}`}
                  alt="Bar chart"
                  className="barchartImage"
                />
              )}
            </div>
          </div>
          <div className="carousel-item">
            <img src={piechart} className="piechartImage" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={radarchart} className="radarchartImage" alt="..." />
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

export default Performance;
