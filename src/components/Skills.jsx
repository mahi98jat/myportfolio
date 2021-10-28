import styled from "styled-components";
// import { Box } from "@mui/material";
//import Box from '@mui/material/Box';
//grid-template-columns: repeat(3,1fr);
export default function Skills() {
  const Skill = styled.div`
    width: 100%;
    margin-top: 6%;
    color: #d3e0ea;
    text-align: center;
    @media (max-width: 720px) {
      font-size: 16px !important;
      margin-top: 16%;
    }
    & > div {
      margin: auto;
      margin-top: 5%;
      @media (max-width: 768px) {
        margin-top: 15%;
      }
      @media(max-width:420px){
        display:flex;
        flex-direction:column;
      }
    }
    & > div > div {
      width: 70%;

      margin: auto;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      row-gap: 20%;
      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 90%;
        margin: auto;
        row-gap: 10%;
      }
      @media (max-width: 420px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 80%;
      }
    }
    & > div > div > div {
      box-sizing: content-box;
      height: 110px;
      width: 100px;
      margin: auto;
      border-radius:5px;
      background:#233E8B;
      box-shadow: 2px 2px 5px 1px #d8e3e7;
      transition:transform 0.4s;
      &:hover {
        -ms-transform: scale(1.4);
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
       
      }
    }

    & > div > div > div > img {
      height: 80px;
      width: 80px;
      border-radius: 5px;
      margin-top: 5px;
    }
  `;
  return (
    <Skill>
      <div>
        <div className="tech-skills">
          <p
            style={{
              width: "250px",
              marginLeft: "10%",
            }}
          >
            TECHNICAL SKILLS
          </p>
        </div>
        <div>
          <div>
            {" "}
            <img src="./images/html.png" />
            <br />
            <span>HTML</span>
          </div>
          <div>
            {" "}
            <img src="./images/mongodb.png" />
            <br />
            <span>MongoDB</span>
          </div>
          <div>
            <img src="./images/mysql.png" />
            <br />
            <span>mySQL</span>
          </div>
          <div>
            <img src="./images/react.png" />
            <br />
            <span>React</span>
          </div>
          <div>
            {" "}
            <img src="./images/redux.png" />
            <br />
            <span>Redux</span>
          </div>

          <div>
            <img src="./images/javascript.png" />
            <br />
            <span>JavaScript</span>
          </div>
          <div>
            <img src="./images/algorithms.png" />
            <br />
            <span>Algorithms</span>
          </div>
          <div>
            <img src="./images/data-structure.png" />
            <br />
            <span>Data-Structures</span>
          </div>

          <div>
            <img src="./images/node-js.png" />
            <br />
            <span>Node Js</span>
          </div>
          <div>
            <img src="./images/css.png" />
            <br />
            <span>CSS</span>
          </div>
        </div>
      </div>

      <div className = "s-f">
        <div className="soft-skills">
          <p
            style={{
              width: "200px",
              marginLeft: "10%",
            }}
          >
            SOFT SKILLS
          </p>
        </div>
        <div>
          <div>
            {" "}
            <img src="./images/presentation.png" />
            <br />
            <span>Presentation</span>
          </div>
          <div>
            {" "}
            <img src="./images/teamwork.png" />
            <br />
            <span>Team Work</span>
          </div>
          <div>
            {" "}
            <img src="./images/leadership.png" />
            <br />
            <span>Leadership</span>
          </div>
          <div>
            {" "}
            <img src="./images/connected-user.png" />
            <br />
            <span>Online Collaboration</span>
          </div>
        </div>
      </div>
    </Skill>
  );
}
