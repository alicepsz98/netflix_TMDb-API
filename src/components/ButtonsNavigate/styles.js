import styled from 'styled-components';

export const ButtonsNavigateContainer = styled.div`
  > div {
    position: absolute;
    width: 40px;
    height: 225px;
    background: #280101a2;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    @media (max-width: 760px) {
      width: 30px;
    };
    @media (max-width: 415px) {
      height: 200px;
    };
  }
`;

export const MoviesLeft = styled.div`
  left: 30px;
  @media (max-width: 760px) {
    left: 20px;
  };
  @media (max-width: 415px) {
    left: 11px;
  };
`;

export const MoviesRight = styled.div`
  right: 30px;
  @media (max-width: 760px) {
    right: 18px;
  };
  @media (max-width: 415px) {
    right: 07px;
  };
`;