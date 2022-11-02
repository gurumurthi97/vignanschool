import React from "react";
import "./style.css";
import kids from "../assets/kids.png";
import Button from "../Button";
import OutLineButton from "../OutLineButton";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";
// import { type } from "@testing-library/user-event/dist/type";
function LandingPage(props) {
  return (
    <div className="landpage">
      <div className="first">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: "all 3s" }}
          className="head"
        >
          Vignan Schools
        </motion.h1>
        <p className="sub-head">
          The most important day of a person’s education is the first day of
          school, not Graduation Day.
        </p>
        <br />
        <div className="buttons">
          <a href="/dashboard" style={{ textDecoration: "none" }}>
            <Button text={"DashBord"} />
          </a>
          <RWebShare
            data={{
              text: "Vignan School",
              url: "https://on.natgeo.com/2zHaNup",
              title: "Vignan School",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <OutLineButton text={"Shared"} />
          </RWebShare>
        </div>
      </div>
      <div className="second">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          className="img"
          src={kids}
          alt="kids photos"
        />
      </div>
    </div>
  );
}

export default LandingPage;
