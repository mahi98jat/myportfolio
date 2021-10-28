import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Projects() {
  const ProjectContainer = styled.div`
    display: grid;
    margin-top: 6%;
    color: #d3e0ea;
    & h3 {
      letter-spacing: 1px;
      line-height: 1.5;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 16%;
    }
  `;
  const Project1 = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1%;

    @media (max-width: 768px) {
      flex-direction: column;
    }
    & > img {
      height: 90%;
      width: 500px;
      border-radius: 5px;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      box-shadow: 2px 2px 5px 1px #d8e3e7;
      @media (max-width: 768px) {
        width: 90%;
        margin: 20px auto;
      }
    }
    & > div {
      height: 90%;
      width: 50%;
      border-radius: 5px;
      transition: transform 0.4s;
      padding-bottom: 0.5%;
      &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      box-shadow: 2px 2px 5px 0.8px #d8e3e7;
      @media (max-width: 768px) {
        width: 90%;
        margin: auto;
      }
    }
    & > div > p {
      width: 80%;
      margin: 2% auto;
      color: #d3e0ea;
      letter-spacing: 1px;
      line-height: 1.5;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
  `;
  const Project2 = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1%;
    height: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    & > img {
      height: 90%;
      width: 500px;
      border-radius: 5px;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      box-shadow: 2px 2px 5px 0.8px #d8e3e7;

      @media (max-width: 768px) {
        width: 90%;
        margin: 20px auto;
      }
    }
    & > div {
      padding-bottom: 0.5%;
      height: 90%;
      width: 50%;
      border-radius: 5px;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      box-shadow: 2px 2px 5px 0.8px #d8e3e7;

      @media (max-width: 768px) {
        width: 90%;
        margin: auto;
      }
    }
    & > div > p {
      width: 80%;
      margin: 2% auto;
      color: #d3e0ea;
      letter-spacing: 1px;
      line-height: 1.5;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
  `;
  return (
    <ProjectContainer>
      <Project2>
        <div>
          {" "}
          <h3>JIO SAAVAN (Music App)</h3>
          <p>
            This project is a complete clone UI of the jioSaavn website with the
            functionalities of searching a Song/Album/Artists and playing a
            particular song. We used mock-server for user registraion and login
            and for searching a song and playing it we are using jioSaavn API.
            For the frontend we have used React.
          </p>
          <p>TECH STACK :-</p>
          <p>React | MongoDB| HTML | CSS</p>
          <a
            class="a-l"
            href="https://github.com/Sabareesh-Subramanian/JioSaavn_Clone/tree/master/client"
            target="_blank"
          >
            VISIT GIT REPO...
          </a>
        </div>
        <img
          src="https://user-images.githubusercontent.com/83001524/135755654-171a9df3-de0e-4e6a-9f67-2e82bdae14b3.png"
          alt="home"
        ></img>
      </Project2>
      <Project1>
        <div>
          <h3>LYNDA LEARNING</h3>
          <p>
            Lynda.com is a learning platform that provides a hundreds of courses
            on the on-demand skills. A User can get a primium subscription and
            can have access to all the courses available for a certain duration.
          </p>

          <p>TECH STACK :-</p>
          <p>
            JavaScript | MongoDB | Express | MVC Model | Node Js | HTML | CSS
          </p>

          {/* <Redirect> visit repo</Redirect> */}
          <a
            class="a-l"
            href="https://github.com/ankitkumar3443/Llinkedin_learning/tree/main/Project"
            target="_blank"
          >
            VISIT GIT REPO...
          </a>
        </div>
        <img
          src="https://user-images.githubusercontent.com/53153822/130081241-cce4746f-9396-49f9-8c08-d92c63deb0f4.png"
          alt="home"
        ></img>
      </Project1>
    </ProjectContainer>
  );
}
