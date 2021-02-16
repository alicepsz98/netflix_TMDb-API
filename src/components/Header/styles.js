import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  > div {
    background: transparent;
    padding: 20px 35px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 760px) {
      padding-left: 20px;
      padding-right: 20px;
    };
    @media (max-width: 415px) {
      padding-left: 15px;
      padding-right: 15px;
    };
    > a {
      > img {
        height: 35px;
        @media (max-width: 840px) {
          height: 24px;
        };
        @media (max-width: 400px) {
          height: 28px};
        }
      }
    }
  }
`;