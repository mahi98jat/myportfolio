import styled from "styled-components";
import DownloadButton from "./Button";
export default function About() {
  const Container = styled.div`
    background: white;
    height: 100%;
  `;
  const AboutMe = styled.div`
    display: flex;

    justify-content: space-around;
    & > img {
      margin-top: 10%;
      height: 300px;
      width: 280px;
      border-radius: 50%;
    }
    & > div {
      margin-top: 16%;
      color: #1c7947;
    }
  `;
  const Para = styled.p`
    width: 40%;
    padding: 2%;
    margin: auto;
    text-align: center;
    color: #1c7947;
  `;
  return (
    <Container>
      <AboutMe>
        <img src="/images/portfoliopic.jpeg"></img>
        <div>
          <h1>Mahipal Singh Haritwal</h1>
          <h4>Full Stack Web Developer (MERN Stack)</h4>
        </div>
      </AboutMe>
      <div>
        <Para>
          I am software engineer fresh graduate from Masai school, Bengaluru. I
          have done Bachelor of Engineering in Computer Science and Science in
          year 2020. I have learned Full Stack Web Development. I am looking for
          an opportunity to enhance my skills. I belongs to a agregarian
          background. In my spare time I like to playing cricket and riding
          bike.
        </Para>
      </div>
      <DownloadButton>Download Resume</DownloadButton>
    </Container>
  );
}
