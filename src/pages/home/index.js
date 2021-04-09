import React, { Component } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrBlog } from "react-icons/gr";

import "./styles.css";

import picture from "../../assets/ricardo-dantas-profile.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="container">
          <img
            className="avatar"
            src={picture}
            alt="Ricardo Dantas"
            title="Ricardo Dantas"
          />

          <h1>Ricardo Dantas</h1>

          <p className="description">Full Stack Developer PHP | JS</p>

          <p>
            <a href="https://blog.ricardodantas.dev/">
              <strong>Visite o meu blog</strong>
            </a>
          </p>

          <section className="info">
            <div className="info-item">
              <GoLocation />
              Rio de Janeiro
            </div>
            <div className="info-item">
              <AiOutlineMail />
              ricardopontesdantas@gmail.com
            </div>
          </section>

          <section className="contact">
            <div>
              <a href="https://github.com/ricardopontesdantas">
                <VscGithubAlt />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ricardopontesdantas">
                <TiSocialLinkedin />
              </a>
            </div>
            <div>
              <a href="https://blog.ricardodantas.dev/">
                <GrBlog />
              </a>
            </div>
          </section>
        </div>
      </>
    );
  }
}
