// import React from "react";
// import "./skills.css";
// import html from "../../assets/html.png";
// import css from "../../assets/css.png";
// import js from "../../assets/js.png";
// import react from "../../assets/react.png";
// import aws from "../../assets/aws.png";
// import figma from "../../assets/figma.png";
// import git from "../../assets/git.png";
// import keras from "../../assets/keras.png";
// import mysql from "../../assets/mysql.png";
// import netlify from "../../assets/netlify.png";
// import numpy from "../../assets/numpy.png";
// import pandas from "../../assets/pandas.png";
// import python from "../../assets/python.png";
// import scikit from "../../assets/scikit.png";
// import styled from "../../assets/styled-components.png";
// import tensorflow from "../../assets/tensorflow.png";
// import mui from "../../assets/mui.png";
// import sass from "../../assets/sass.png";
// import tailwind from "../../assets/tailwind.png";
// import bootstrap from "../../assets/bootstrap.png";
import React from "react";
import "./skills.css";
import Proficiency from "./Proficiency";

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Tech Skills</h2>

      <div className="skills__container grid">
        {Proficiency.map((skill, index) => (
          <div key={index} className="skills__card">
            <img src={skill.image} alt={skill.name} className="skills__img" />
            <div className="skills__overlay">
              <p className="skills__text">{skill.proficiency}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
