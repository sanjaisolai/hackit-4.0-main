import React, { useState, useEffect } from "react";
import styles from "../styles/pages/Home.module.css";
import csi from "../assets/images/csi.png";
import ait from "../assets/images/ait.png";
import mrcooper from "../assets/images/mr_cooper.png";
import characters from "../assets/images/characters.png";
import Timer from "../components/Timer";
import Button from "../components/Button";
import Domain from "./Domain";

const Home = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyles = {
    transform: `translate(-${mouseCoords.x / 150}px, -${
      mouseCoords.y / 150
    }px)`,
    overflow: "hidden", // Add this line to hide overflow
  };

  const bgParallaxStyles = {
    transform: `translate(${mouseCoords.x / 150}px, -${mouseCoords.y / 150}px)`,
    overflow: "hidden", // Add this line to hide overflow
  };

  return (
    <div className={styles.home} id="home">
      <div className={styles.organizers}>
        <img src={csi} className={styles.csi} alt="" />
        <img src={ait} className={styles.ait} alt="" />
        <img src={mrcooper} className={styles.mc} alt="" />
      </div>
      <p className={styles.itdept}>Department of Information Technology</p>
      <p className={styles.hackit}>HACK IT 3.0</p>
      <div className={styles.details}>
        <p className={styles.titles}>24Hrs Hackathon</p>
        <p className={styles.titles}>April 2nd, 3rd - 2024</p>
      </div>
      <Timer />
      <br />
      <Button />
      {/* <Domain/> */}
      {/* <img
        src={characters}
        className={styles.characters}
        style={parallaxStyles}
        alt=""
      /> */}
    </div>
  );
};

export default Home;
