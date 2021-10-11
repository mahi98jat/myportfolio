import styled from "styled-components";
import DownloadButton from "./Button";
export default function About() {
  const Container = styled.div`
    background: #efe7e7;
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
        <img src="/images/portfoliopic.jpg"></img>
        <div>
          <h1>Mahipal Singh Haritwal</h1>
          <h4>Full Stack Web Developer (MERN Stack)</h4>
        </div>
      </AboutMe>
      <div>
        <Para>
          I am an aspiring Full Stack Web Developer. Learning MERN Stack at
          Masai School, Bengaluru, India. In this journey of learning I have
          learned technologies as JavaScript, React, Redux, Data-Structure,
          Algorithms. 
          Learning technologies and implementing drives a immense
          happiness from inside. I have done Bachelors of Engineering in
          Computer Science and Engineering from Sha Shib College of Technology,
          Bhopal.
        </Para>
      </div>
      <DownloadButton>Download Resume</DownloadButton>
    </Container>
  );
}
