import Navbar from "../navbar/Navbar";
import styled from "styled-components";
export default function Welcome() {
  const Wel = styled.div`
    height:90%
    width:80%;
    position:relative;
    padding-top:10%;
    background:transparent;
    & > p {
      fond-size: 60px;
    }
    & > h1{
      color: rgb(177, 75, 75);
    }`;
  return (
    <Wel>
      <p className="welcome">Welcome </p>
      <h1>To My Portfolio</h1>
    </Wel>
  );
}
