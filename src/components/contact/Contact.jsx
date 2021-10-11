import styled from "styled-components";


export default function Contact() {
  const Social = styled.div`
    display: flex;
    justify-content: space-around;
    background: #efe7e7;
    height: 100%;
    color: blue;
    padding-top: 10%;
    & > div > div {
      margin: 8%;
    }
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

  return (
    <Social>
      <div>
        <div>
          <a href="https://github.com/mahi98jat" target="_blank">
            <img
              style={{
                height: "50px",
                width: "50px",
              }}
              src="./images/github-logo.png"
            />
          </a>
          <br />
          <span>GitHub</span>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jtmahi/" target="_blank">
            <img
              style={{
                height: "50px",
                width: "50px",
              }}
              src="./images/5296501_linkedin_network_linkedin logo_icon.png"
            />
          </a>
          <br />
          <span>Linkedin</span>
        </div>
        <div>
          <h3> Mobile:- 7024370634</h3>
          <h3> Email:- mahi98jat@gmail.com</h3>
        </div>
      </div>

      <FormContainer>
        <input type="text" placeholder=" Name here"></input>
        <br />
        <input type="email" placeholder=" Email here"></input>
        <br />

        <textarea placeholder="Comment here..."></textarea>
        <br />
        <button>Submit</button>
      </FormContainer>
    </Social>
  );
}
