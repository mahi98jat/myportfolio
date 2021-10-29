import styled from "styled-components";

export default function Contact() {
  const Social = styled.div`
    letter-spacing: 1px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    color: #d3e0ea;
    padding-top: 10%;
    border-radius: 5px;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 5%;
    }
    & > div {
      padding: 2%;
    }

    & > div > div {
      margin: 8%;
      width: 300px;
      padding: 2%;
      border-radius: 5px;
      box-shadow: 2px 2px 5px 1px #d8e3e7;
      @media (max-width: 768px) {
        margin: 20px auto;
      }
      transition: transform 0.4s;
      &:hover {
        -ms-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }
    }
  `;
  const FormContainer = styled.div`
    width: 350px;
    border-radius: 5px;
    transition: transform 0.4s;
    &:hover {
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      margin: auto;
    }
    & > input {
      width: 85%;
      height: 40px;
      border: none;
      color: #d3e0ea;
      background: transparent;
      margin: 3%;
      outline: none;
      border-radius: 5px;
      box-shadow: 1px 2px 3px 1px #d8e3e7;
    }
    & > textarea {
      border: none;
      width: 82%;
      padding-left: 1.5%;
      padding-right: 1.5%;
      color: #d3e0ea;
      padding-top: 5%;
      box-shadow: 1px 2px 3px 1px #d8e3e7;
      height: 200px;
      margin: 3%;
      background: transparent;
      outline: none;
      border-radius: 5px;
    }
    & > button {
      border: none;
      height: 47px;
      width: 200px;
      color: #d3e0ea;
      background: transparent;
      margin: 3% auto;
      border-radius: 5px;
      font-size: 18px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 5px 1px #d8e3e7;
      &:hover {
        background: #1687a7;
      }
    }
  `;

  return (
    <Social>
      <div>
        <div>
          <a href="https://github.com/mahi98jat" target="_blank">
            <img
              style={{
                margin: "5px",
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
                margin: "5px",
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
          <p className="mobile"> Mobile:- 7024370634</p>
          <p className="mobile"> Email:- mahi98jat@gmail.com</p>
        </div>
      </div>

      <FormContainer>
        <p
          style={{
            textAlign: "left",
            marginLeft: "7%",
          }}
        >
          Send me text...
        </p>
        <input type="text" placeholder=" Name here"></input>
        <br />
        <input type="email" placeholder=" Email here"></input>
        <br />

        <textarea placeholder="Comment here..."></textarea>
        <br />
        <button>SUBMIT</button>
      </FormContainer>
    </Social>
  );
}
