import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  color:  #ffffffbd; 
  border-top: #ffffff7c 0.3px solid;
  padding: 10px 0;
  margin: 70px 35px 0 35px;
  > p {
    font-size: 90%;
    margin: 5px;
    @media (max-width: 680px) {
      font-size: 80%;
    };
  }
  @media (max-width: 415px) {
    margin: 50px 20px 0 20px;
  };
`;
