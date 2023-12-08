import React from "react";
import "./about.css";
import Image from "../../assets/my-image2.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              안녕하세요! 프론트엔드 개발자 이채현입니다
              <br />
              Figma를 활용한 UX/UI, React.js를 활용한
              <br />
              프론트엔드 개발, Python을 활용한 데이터 분석,
              <br />
              머신러닝 및 딥러닝 모델링을 공부했습니다
              <br />
              대표 프로젝트는 제가 프론트엔드 개발을 담당한
              <br />
              AI 화장법 추천 서비스인 'Face Manager'입니다
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UX/UI design</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data/AI modeling</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage data"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
