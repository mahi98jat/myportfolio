import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Projects() {
  const ProjectContainer = styled.div`
    display: grid;
    background: white;
    margin-top: 1%;
    color: blue;
    overflow: scroll;
    height: 100%;
  `;
  const Project1 = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1%;
    & > img {
      height: 90%;
      width: 500px;
    }
    & > div {
      height: 90%;
      width: 50%;
      border-radius: 4%;
    }
    & > div > p {
      width: 60%;
      margin: auto;
      color: #1c7947;
    }
  `;
  const Project2 = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1%;
    & > img {
      height: 90%;
      width: 500px;
      border-radius: 4%;
    }
    & > div {
      height: 90%;
      width: 50%;
    }
    & > div > p {
      width: 60%;
      margin: auto;
      color: #1c7947;
    }
  `;
  return (
    <ProjectContainer>
      <Project1>
        <img
          src="https://user-images.githubusercontent.com/53153822/130081241-cce4746f-9396-49f9-8c08-d92c63deb0f4.png"
          alt="home"
        ></img>
        <div>
          <h3>www.lynda.com</h3>
          <p>
            Lynda.com is a learning platform that provides a hundreds of courses
            on the on-demand skills. A User can get a primium subscription and
            can have access to all the courses available for a certain duration.
          </p>
          <h6>Tech Stack :-</h6>
          <p>
            JavaScript | MongoDB | Express | MVC model | Node Js | HTML | CSS
          </p>
          {/* <Redirect> visit repo</Redirect> */}
          <Link>visit repo</Link>
        </div>
      </Project1>
      <Project2>
        <img
          src="https://user-images.githubusercontent.com/83001524/135755654-171a9df3-de0e-4e6a-9f67-2e82bdae14b3.png"
          alt="home"
        ></img>
        <div>
          {" "}
          <h3>www.jiosaavan.com</h3>
          <p>
            This project is a complete clone UI of the jioSaavn website with the
            functionalities of searching a Song/Album/Artists and playing a
            particular song. We used mock-server for user registraion and login
            and for searching a song and playing it we are using jioSaavn API.
            For the frontend we have used React.
          </p>
          <h6>Tech Stack :-</h6>
          <p>React | MongoDB| HTML | CSS</p>
          <Link>visit repo</Link>
        </div>
      </Project2>
    </ProjectContainer>
  );
}
