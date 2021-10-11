import styled from "styled-components";

export default function Skills() {
  const Skill = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    padding-top: 2%;
    background: #efe7e7;
    color: blue;
    text-aligh: center;
    & > div > div {
      margin-top:3%;
      display: flex;
      justify-content: space-around;
    }

    & > div > div > div > img {
    
      height: 80px;
      width: 80px;
      border-radius: 5px;
    }
  `;
  return (
    <Skill>
      <div>
        <div className="tech-skills">
          <p>Technical Skills</p>
        </div>
        <div>
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
        </div>
      </div>

      <div>
        <div className="soft-skills">
          <p>Soft Skills</p>
        </div>
        <div><div>
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
