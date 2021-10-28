import styled from "styled-components";
import DownloadButton from "./Button";
export default function About() {
  // height: 100%;
  const AboutMe = styled.div`
    display: flex;
    color: #f6f5f5;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-evenly;
    }
    & > img {
      margin-top: 14%;
      height: 300px;
      width: 280px;
      border-radius: 50%;
      box-shadow: 2px 2px 5px 1px #d8e3e7;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.4);
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
      }
      @media (max-width: 768px) {
        margin: 16% auto;
      }
    }
    & > div {
      width: 40%;
      margin-top: 12%;
      color: #d3e0ea;
      box-shadow: 2px 2px 5px 1px #d8e3e7;
      border-radius: 5px;
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.3);
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }
      @media (max-width: 768px) {
        width: 80%;
        margin: 4% auto;
      }
    }
  `;
  const Para = styled.p`
    padding: 2%;
    letter-spacing: 1px;
    
    margin: auto;
    text-align: left;
    color: #d3e0ea;line-height: 1.5;
    @media (max-width: 768px) {
      width: 80%;
      line-height: 1.5;
    }
  `;
  return (
    <>
      <AboutMe>
        <img src="/images/portfoliopic.jpg"></img>
        <div>
          <h1 className="my-name">Mahipal Singh Haritwal</h1>
          <h4
            style={{
              letterSpacing: "1px",
            }}
          >
            FULL STACK WEB DEVELOPER (MERN STACK)
          </h4>
          <Para>
            I am an aspiring Full Stack Web Developer. Learning MERN Stack at
            Masai School, Bengaluru, India. In this journey of learning I have
            learned technologies as JavaScript, React, Redux, Data-Structure,
            Algorithms. Learning technologies and implementing drives a immense
            happiness from inside. I have done Bachelors of Engineering in
            Computer Science and Engineering from Sha Shib College of
            Technology, Bhopal.
          </Para>
        </div>
      </AboutMe>
      <DownloadButton>DOWNLOAD RESUME</DownloadButton>
    </>
  );
}
