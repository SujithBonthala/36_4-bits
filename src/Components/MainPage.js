import React from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MainPage() {
  const navigate = useNavigate();
  const [my_data, setdata] = useState("");

  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/member`);
    const a = (response.data.results);
    alert(a)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Mainouter">
      <h1 className="Mainheading">Welcome to the world of analytics</h1>
      <div
        class="card container"
        style={{ width: 18 + "em" }}
        className="MainBox"
      >
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle dropdownbutton"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Performance Analysis
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <button
                  type="button"
                  class="btn btn-primary Buttonlist"
                  onClick={() => {
                    navigate("/performance");
                  }}
                >
                  Input data file
                </button>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle dropdownbutton"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Feedback Analysis
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <button
                  type="button"
                  class="btn btn-primary Buttonlist"
                  onClick={() => {
                    navigate("/performance");
                  }}
                >
                  Input data file
                </button>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <button
              type="button"
              class="btn btn-primary onlyButtonlist"
              onClick={() => {
                navigate("/prediction");
              }}
            >
              Predictions
            </button>
          </li>
          <li class="list-group-item">
            <button
              type="button"
              class="btn btn-primary onlyButtonlist"
              onClick={() => {
                navigate("/performance");
              }}
            >
              Suggestion
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainPage;
