import styled from "styled-components";

const DownloadButton = (props) => {
  const Button = styled.button`
    height: 47px;
    width: 200px;
    color: white;
    background-color: blue;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 18px;
  `;
  const downloadFile = () => {
      window.location.href =
        "https://drive.google.com/file/d/1IHHcqpJzQ7vmKUnfX5RLsncUZEMXtSXI/view?usp=sharing";
    };
  
  return <Button onClick={downloadFile}>Download Resume</Button>;
};
export default DownloadButton;
