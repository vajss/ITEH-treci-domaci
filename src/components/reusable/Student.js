import React, { useState } from "react";
import "../../App.css";

function Student(props) {
  const [detaljiHidden, hideDetalji] = useState(true);

  const showDetalji = () => {
    if (detaljiHidden) {
      hideDetalji(false);
      return;
    }
    hideDetalji(true);
  };
  return (
    <div className="col-4 ">
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={props.student.img} className="card-img-top" alt="..." style={{ height: "280px", background: "white" }}></img>
        <div className="card-body">
          <h5 className="card-title">{props.student.ime}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.student.komitet}</h6>
          <div className="card-text">
            <p>
              Fakultet: <i>{props.student.fakultet}</i>
              <br></br>
              Godine: <i>{props.student.godine}</i>
            </p>
            <p id="detalji" hidden={detaljiHidden}>
              Detalji:
              <br></br>
              Godina studija: <i>{props.student.detalji.GS}</i>
              <br></br>
              Broj putovanja: <i>{props.student.detalji.BP}</i>
              <br></br>
              Broj organizovanih dgadjaja: <i>{props.student.detalji.BOD}</i>
              <br></br>
              ESTIEM poeni: <i>{props.student.detalji.EP}</i>
              <br></br>
            </p>
            <hr></hr>
            <button className="btn btn-block" onClick={showDetalji}>
              Detaljnije
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
