import styled from 'styled-components';

export const MoviesContainer = styled.div`
  margin-bottom: 30px;
  > h2 {
    margin: 0 0 0 30px;
    @media (max-width: 580px) {
      font-size: 120%;
  };
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  margin: 0 30px;
  @media (max-width: 760px) {
    margin-left: 20px;
    margin-right: 20px;
  };
`;

export const ListContainer = styled.div`
  transition: all ease 0.5s;
  > div {
    display: inline-block;
    width: 150px;
    @media (max-width: 415px) {
      width: 130px;
    };
    > img {
      width: 100%;
      cursor: pointer;
      transform: scale(0.9);
      transition: all ease 0.2s;
      box-shadow: 0 0 5px black;
      :hover {
        transform: scale(1);
      };
    };
  };
`;

