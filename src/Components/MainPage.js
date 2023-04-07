import React from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MainPage() {
  const navigate = useNavigate();
  const [my_data, setdata] = useState("");

  const handleFileUploadP = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("File successfully uploaded!");
        navigate("/performance");
      })
      .catch((error) => {
        alert("Error occurred while uploading the file!: " + error);
      });
  };

  const handleFileUploadF = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    alert(file)
    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("File successfully uploaded!");
        navigate("/performance");
      })
      .catch((error) => {
        alert("Error occurred while uploading the file!: " + error);
      });
  };

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
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Upload</span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      onChange={handleFileUploadP}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose
                    </label>
                  </div>
                </div>
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
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Upload</span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      onChange={handleFileUploadF}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose
                    </label>
                  </div>
                </div>
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
