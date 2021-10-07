import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Contact() {
  const Social = styled.div`
    display: flex;
    justify-content: space-around;
    background: #efe7e7;
    height: 100%;
    color: blue;
    padding-top: 10%;
  `;
  const FormContainer = styled.div`
  height:90%
  width:90%;
  
 
  &>input{
    width:300px;
    border:0.1px solid gray;
    background:transparent;
    margin:1%;
    outline:none;

  }
  &>textarea{
    width:300px;
    border:0.1px solid gray;
    height:200px;
    margin:1%;
    background:transparent;
    outline:none;
   
  }
  &>button{
    height: 47px;
    width: 200px;
    color: white;
    background-color:blue;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 18px;
  }
  `;
  const Box = styled.input`
    width: 80%;
    height: 300px;
  `;
  return (
    <Social>
      <div>
        <Link to="https://github.com/mahi98jat">
          <h1>GitHub</h1>
        </Link>
        <Link to="www.linkedin.com/in/jtmahi">
          <h1>Linkedin</h1>
        </Link>
      </div>
      <div>
        <h3>7024370634</h3>
        <h3>mahi98jat@gmail.com</h3>
      </div>
      <FormContainer>
        <input type="text" placeholder=" Name here"></input>
        <br />
        <input type="email" placeholder=" Email here"></input>
        <br />
        {/* <Box type="text" placeholder="comments"></Box> */}
        <textarea
         
          placeholder="Comment here..."
        ></textarea>
        <br />
        <button>Submit</button>
      </FormContainer>
    </Social>
  );
}
