import styled from "styled-components";

const DownloadButton = (props) => {
  const Button = styled.button`
    height: 47px;
    width: 220px;
    color: #D3E0EA;
    background:transparent;
    margin: 5% auto;
    margin-left: 32%;
    border-radius: 5px;
    border:none;
    box-shadow: 2px 2px 5px 1px #d8e3e7;
    font-size: 18px;
    &:hover{
    background: #1687A7;
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
