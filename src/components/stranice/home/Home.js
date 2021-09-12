import React from "react";
import Navbar from "../../reusable/Navbar";

function Home(props) {
  return (
    <div className="d-flex Home">
      <Navbar activePage="Pocetna" />
      <div className="col-9 ">
        {props.backgrounds.map((bgr) => {
          return (
            <img
              width="50%"
              style={{ marginBottom: "10px" }}
              src={bgr}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
