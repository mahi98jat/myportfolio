import styled from "styled-components";

export default function Skills() {
  const Skill = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding-top: 5%;
    background: #efe7e7;
    color: blue;
    text-aligh: center;
    justify-content: space-around;
    & > div > div > p {
      color: #1c7947;
    }
  `;
  return (
    <Skill>
      <div>
        <div className = "tech-skills">
          <p>Technical Skills</p>
        </div>
        <div>
          <p>JavaScript</p>
          <p>React</p>
          <p>Algorithms</p>
          <p>Data-Structures</p>
          <p>Node Js</p>
          <p>HTML</p>
          <p>CSS</p>

          <p>MongoDB</p>
          <p>mySQL</p>
          <p>Express</p>
        </div>
      </div>

      <div>
        <div className = "soft-skills">
          <p>Soft Skills</p>
        </div>
        <div>
          <p>Presentation</p>
          <p>Leadership</p>
          <p>Online Collaboration</p>
          <p>Team Work</p>
        </div>
      </div>
    </Skill>
  );
}
