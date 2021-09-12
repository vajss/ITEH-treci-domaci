import React, { useState } from "react";
import Navbar from "./Navbar";
import Student from "./Student";

function LG(props) {
  const [LG, setLG] = useState(props.LG);

  const showStudenti = (studenti) => {
    if (studenti != undefined) {
      return studenti.map((student, index) => {
        return <Student key={student.LG + index} student={student} />;
      });
    }
  };

  return (
    <div className="d-flex">
      <Navbar activePage={LG.LG} />
      <div className="col-9">
        <h1 align="center">{LG.LG}</h1>
        <div className="row justify-content-between">
          {showStudenti(LG.studenti)}
        </div>
      </div>
    </div>
  );
}

export default LG;
