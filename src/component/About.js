import React from "react";
import Common from "./Common";
import web from "../images/img3.png"

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
}

export default About;
