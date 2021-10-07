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
    }`;
  return (
    <Wel>
      <p className="welcome">Welcome Here </p>
    </Wel>
  );
}
