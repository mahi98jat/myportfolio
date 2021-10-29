import styled from "styled-components";

const DownloadButton = (props) => {
  const Button = styled.button`
  
    
    color: #d3e0ea;
    background: transparent;
    margin: 5% auto;
    margin-left: 32%;
    border-radius: 5px;
    border: none;
    padding: 20px;
    border: 0.1px solid #d3e0ea;
    font-size: 18px;
    &:hover {
      background: #1687a7;
    }
    @media (max-width: 768px) {
      margin: 2% auto;
    }
  `;
  const downloadFile = () => {
    window.location.href =
      "https://drive.google.com/file/d/1IHHcqpJzQ7vmKUnfX5RLsncUZEMXtSXI/view?usp=sharing";
  };

  return <Button onClick={downloadFile}>DOWNLOAD RESUME</Button>;
};
export default DownloadButton;
