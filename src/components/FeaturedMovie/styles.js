import styled from 'styled-components';

export const FeaturedContainer = styled.section`
  height: 87vh;
  background-size: cover;
  background-position: center;
  @media (max-width: 415px) {
    height: 80vh;
  };
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #280101 5%, transparent 95%);
`;

export const FeaturedHorizontal = styled.div`
  padding: 70px 0 0 35px;
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #280101 20%, transparent 80%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 840px) {
    padding-top: 50px;
  };
  @media (max-width: 760px) {
    padding-left: 25px;
    padding-right: 25px;
  };
  @media (max-width: 415px) {
    padding-left: 15px;
    padding-right: 15px;
  };
  > h2 {
    margin: 0;
    font-size: 250%;
    @media (max-width: 980px) {
      font-size: 250%;
    };
    @media (max-width: 840px) {
      font-size: 220%;
    };
    @media (max-width: 680px) {
      font-size: 200%;
    };
    @media (max-width: 580px) {
      font-size: 180%;
    };
    @media (max-width: 410px) {
      font-size:160%;
    };
  }
`;

export const MovieInfo = styled.div`
  > h3 {
    display: inline-block;
    color: #46d369;
    margin: 10px 0 10px 0;
    margin-right: 40px;
    font-size: 130%;
    @media (max-width: 980px) {
      font-size: 115%;
      margin-right: 35px;
    };
  };
  > h4 {
    display: inline-block;
    margin: 10px 0 10px 0;
    font-size: 150%;
    @media (max-width: 980px) {
      font-size: 115%;
    };
  };
`;

export const MovieDescription = styled.div`
  color: #999;
  max-width: 35%;
  margin-bottom: 20px;
  font-size: 105%;
  @media (max-width: 980px) {
    font-size: 91%;
    max-width: 41%;
  };
  @media (max-width: 680px) {
    max-width: 49%;
    font-size: 87%;
  };
  @media (max-width: 615px) {
    max-width: 55%;
    margin-bottom: 10px;
  };
  @media (max-width: 580px) {
    font-size: 82%;
    max-width: 58%;
  };
  @media (max-width: 415px) {
    max-width: 63%;
  };
`;

export const Buttons = styled.div`
  display: flex;
  > button {
    padding: 10px;
    width: 100px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 0.5;
    :hover {
      opacity: 0.8;
    }
    @media (max-width: 580px) {
      padding: 6px;
      width: 93px;
    };
  }
`;

export const ButtonToSee = styled.button`
  margin-right: 10px ;
  @media (max-width: 580px) {
    font-size: 80%;
  };
`;

export const ButtonAdd = styled.button`
  font-size: 83%;
  color: white;
  background:  #333;
`;

