import React, { useState } from 'react';
import ButtonsNavigate from '../ButtonsNavigate/ButtonsNavigate';
import {
  MoviesContainer,
  ListContainer,
  ListArea
} from './styles';


function MoviesList({ movie }) {

  const [scrollX, setScrollX] = useState(0);

  const handleBefore = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0
    };
    setScrollX(x);
  };

  const handleNext = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = movie.items.results.length * 150;
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    };
    setScrollX(x);
  };

  return (
    <MoviesContainer>
      <h2>{movie.title}</h2>
      <ButtonsNavigate 
        clickBefore={handleBefore}
        clickNext={handleNext}
      />
      <ListArea>
        <ListContainer style={{
          marginLeft: scrollX,
          width: movie.items.results.length * 150
        }}>
          {
            movie.items.results.length > 0 &&
            movie.items.results.map((item, key) => (
              <div>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
            ))
          }
        </ListContainer>
      </ListArea>
    </MoviesContainer>
  );

}

export default MoviesList;