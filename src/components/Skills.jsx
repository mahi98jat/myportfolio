import styled from "styled-components";

export default function Skills() {
  const tech_skills = [
    { src: "./images/html.png", name: "HTML" },
    { src: "./images/mongodb.png", name: "MongoDB" },
    {
      src: "./images/mysql.png",
      name: "MySQL",
    },
    { src: "./images/react.png", name: "React" },
    { src: "./images/redux.png", name: "Redux" },
    { src: "./images/javascript.png", name: "JavaScript" },
    { src: "./images/algorithms.png", name: "Algorithms" },
    { src: "./images/data-structure.png", name: "Data-Structurs" },
    { src: "./images/node-js.png", name: "Node Js" },
    { src: "./images/css.png", name: "CSS" },
  ];

  const Skill = styled.div`
    color: #d3e0ea;
    margin-top: 3%;
    text-align: center;
    & p {
      margin: auto;
      font-weight: 600;
      font-size: 22px;
      padding: 2%;
    }
    & img {
      height: 80px;
      width: 80px;
      border-radius: 5px;
    }
    @media (max-width: 900px) {
      margin-top: 10%;
    }
    @media (max-width: 720px) {
      margin-top: 15%;
    }
  `;
  const TechSkills = styled.div`
    text-align: center;
    padding: 1%;
    margin: 11% auto;
    width: 60%;
    & > div {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      row-gap: 8%;
      @media (max-width: 900px) {
        margin: 6% auto;
        width: 80%;
        grid-template-columns: repeat(4, 1fr);
        
      }
      @media (max-width: 720px) {
        margin: 8% auto;
        width: 90%;

        grid-template-columns: repeat(3, 1fr);
        
      }
      @media (max-width: 420px) {
        margin: auto;
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
        row-gap:4%;
        padding-bottom: 10% !important;
      }
    }
    & div > div {
      height: 110px;
      width: 100px;
      border-radius: 5px;
      padding-top: 2%;
      padding-bottom: 1%;
      margin: 10px;
      box-shadow: 2px 2px 5px 1px #d8e3e7;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.4);
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
      }
    }
  `;

  return (
    <Skill>
      <TechSkills>
        <p>TECHNICAL SKILLS</p>
        <div>
          {tech_skills.map(({ src, name }) => (
            <div>
              <img src={src} />
              <br />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </TechSkills>
    </Skill>
  );
}
// import styled from "styled-components";
// // import { Box } from "@mui/material";
// //import Box from '@mui/material/Box';
// //grid-template-columns: repeat(3,1fr);
// export default function Skills() {
//   const Skill = styled.div`
//     width: 100%;
//     margin-top: 6%;
//     color: #d3e0ea;
//     text-align: center;
//     @media (max-width: 720px) {
//       font-size: 16px !important;
//       margin-top: 16%;
//     }
//     & > div {
//       margin: auto;
//       margin-top: 5%;
//       margin-bottom: 5%;
//       @media (max-width: 768px) {
//         margin-top: 15%;
//         padding-bottom: 6%;
//       }
//       @media (max-width: 420px) {
//         display: flex;
//         flex-direction: column;
//         padding-bottom: 6%;
//       }
//     }
//     & > div > div {
//       width: 70%;

//       margin: auto;
//       display: grid;
//       grid-template-columns: repeat(5, 1fr);
//       row-gap: 20%;
//       @media (max-width: 768px) {
//         pointer-events:none !important;
//         display: grid;
//         grid-template-columns: repeat(3, 1fr);
//         width: 90%;
//         margin: auto;
//         row-gap: 10%;
//       }
//       @media (max-width: 420px) {
//         pointer-events:none !important;
//         display: grid;
//         grid-template-columns: repeat(2, 1fr);
//         width: 80%;
//       }
//     }
//     & > div > div > div {
//       box-sizing: content-box;
//       height: 110px;
//       width: 100px;
//       margin: auto;
//       border-radius: 5px;
//       background: #233e8b;
//       box-shadow: 2px 2px 5px 1px #d8e3e7;

//     }

//     & > div > div > div > img {
//       height: 80px;
//       width: 80px;
//       border-radius: 5px;
//       margin-top: 5px;
//     }
//   `;
//   // transition: transform 0.4s;
//   //     &:hover {
//   //       -ms-transform: scale(1.4);
//   //       -webkit-transform: scale(1.4);
//   //       transform: scale(1.4);
//   //     }
//   return (
//     <Skill>
//       <div>
//         <div className="tech-skills">
//           <p
//             style={{
//               width: "250px",
//               marginLeft: "10%",
//             }}
//           >
//             TECHNICAL SKILLS
//           </p>
//         </div>
//         <div>
//           <div>
//             {" "}
//             <img src="./images/html.png" />
//             <br />
//             <span>HTML</span>
//           </div>
//           <div>
//             {" "}
//             <img src="./images/mongodb.png" />
//             <br />
//             <span>MongoDB</span>
//           </div>
//           <div>
//             <img src="./images/mysql.png" />
//             <br />
//             <span>mySQL</span>
//           </div>
//           <div>
//             <img src="./images/react.png" />
//             <br />
//             <span>React</span>
//           </div>
//           <div>
//             {" "}
//             <img src="./images/redux.png" />
//             <br />
//             <span>Redux</span>
//           </div>

//           <div>
//             <img src="./images/javascript.png" />
//             <br />
//             <span>JavaScript</span>
//           </div>
//           <div>
//             <img src="./images/algorithms.png" />
//             <br />
//             <span>Algorithms</span>
//           </div>
//           <div>
//             <img src="./images/data-structure.png" />
//             <br />
//             <span>Data-Structures</span>
//           </div>

//           <div>
//             <img src="./images/node-js.png" />
//             <br />
//             <span>Node Js</span>
//           </div>
//           <div>
//             <img src="./images/css.png" />
//             <br />
//             <span>CSS</span>
//           </div>
//         </div>
//       </div>

//       <div className="s-f">
//         <div className="soft-skills">
//           <p
//             style={{
//               width: "200px",
//               marginLeft: "10%",
//             }}
//           >
//             SOFT SKILLS
//           </p>
//         </div>
//         <div>
//           <div>
//             {" "}
//             <img src="./images/presentation.png" />
//             <br />
//             <span>Presentation</span>
//           </div>
//           <div>
//             {" "}
//             <img src="./images/teamwork.png" />
//             <br />
//             <span>Team Work</span>
//           </div>
//           <div>
//             {" "}
//             <img src="./images/leadership.png" />
//             <br />
//             <span>Leadership</span>
//           </div>
//           <div>
//             {" "}
//             <img src="./images/connected-user.png" />
//             <br />
//             <span>Online Collaboration</span>
//           </div>
//         </div>
//       </div>
//     </Skill>
//   );
// }
