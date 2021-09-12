import React from "react";
import "../../App.css";
import { Podaci } from "../data/Podaci";

function Navbar(props) {
  function isActive(page) {
    if (props.activePage === page) return true;
    return false;
  }

  return (
    <div className="col-3" id="NavBar">
      <div className="nav flex-column nav-pills">
        <a
          href="http://127.0.0.1:3000/home"
          className={isActive("Pocetna") ? "nav-link active" : "nav-link"}
        >
          Početna
        </a>
        {Podaci.map((LG, index) => {
          return (
            <a
              href={"http://127.0.0.1:3000/LG/" + index}
              key={index + LG.LG}
              className={isActive(LG.LG) ? "nav-link active" : "nav-link"}
            >
              {LG.LG}
              <img
               height="100%"
               style={{ marginLeft: "40px" }}
               src={"http://localhost:3000/" + LG.logo}
              ></img>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
