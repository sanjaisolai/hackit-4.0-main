import React from "react";
import styles from "../styles/pages/Coordinators.module.css";

function Coordinators() {
  return (
    <div className={styles.container} id="coord">
      <p className={styles.heading}>Coordinators</p>
      <div className={styles.coordContainer}>
        <div className={styles.coord}>
          <h1 style={{ textAlign: "left" }}>Head of the Department</h1>
          <p style={{ textAlign: "left" }}> 
            Dr. V. Vidhya <br />
            HoD/INT
          </p>
          <div className={styles.wrapper}>
            <div>
              <h1 style={{ textAlign: "left" }}>AIT Coordinator</h1>
              {/* <br /> */}
              <p style={{ textAlign: "left" }}>
                Dr. V. M. Sivagami <br/>
                Professor/INT
                <br />
                <br />
                Mr. A. Thiyagarajan <br/>
                Assistant Professor/INT
              </p>
            </div>
            <div>
              <h1 style={{ textAlign: "left" }}>CSI Coordinator</h1>
              {/* <br /> */}
              <p style={{ textAlign: "left" }}>
                Mr. V. Ranjith <br />
                Assistant Professor/INT
                <br />
                <br />
              </p>
            </div>

            <div> 
            <h1 style={{ textAlign: "left" }}>Event Coordinator</h1>
            <p style={{ textAlign: "left" }}>
            Dr. A. Kala <br />
            Associate Professor/INT
            <br />
            <br />
            Ms R. Saktheeswari <br />
            Assistant Professor/INT
            <br />
            <br />
            Dr. P. Sharon Femi <br />
            Associate Professor/INT
          </p></div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Coordinators;
