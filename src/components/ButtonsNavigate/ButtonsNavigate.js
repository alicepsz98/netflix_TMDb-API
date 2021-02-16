import React from 'react';
import {
  MoviesLeft,
  MoviesRight,
  ButtonsNavigateContainer
} from './styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function ButtonsNavigate({ clickBefore, clickNext }) {

  return (
    <ButtonsNavigateContainer>
      <MoviesLeft onClick={clickBefore}>
        <NavigateBeforeIcon
          style={{ fontSize: 50 }}
        />
      </MoviesLeft>
      <MoviesRight onClick={clickNext}>
        <NavigateNextIcon
          style={{ fontSize: 50 }}
        />
      </MoviesRight>
    </ButtonsNavigateContainer>
  );

}

export default ButtonsNavigate;