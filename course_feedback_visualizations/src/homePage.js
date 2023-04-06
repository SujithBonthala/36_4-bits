import "./homePage.css";

import { useNavigate } from "react-router-dom";
function Homepage() {

    let navigate = useNavigate();

    return (

        <div id="full_home">

            <div id="header_home">

                <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Visualizations for Course Information</h1>

            </div>

            <div id="box_home">

                <br />

                <p>Select the domain for which visualizations are needed</p>

                <button onClick={() => {navigate("/student")}} >Student Marks</button><br /><br />

                <button onClick={() => {navigate("/feedback")}} >Course Feedback</button><br /><br />

            </div>

        </div>

    )

}



export default Homepage;