import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
export default function Navbar() {
  const Nav = styled.div`
    height: 47px;
    margin-top: -47px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #979393;
    text-aligh: center;
    text-decoration: none;
    position: fixed;
  `;
  return (
    <Nav>
      <Link className="link" to="/">
        Welcome
      </Link>
      <Link className="link" to="/about">
        About Me
      </Link>
      <Link className="link" to="/project">
        Project
      </Link>
      <Link className="link" to="/skills">
        Skills
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </Nav>
  );
}
