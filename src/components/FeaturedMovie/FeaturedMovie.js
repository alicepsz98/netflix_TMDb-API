import React from 'react';
import {
  FeaturedContainer,
  FeaturedVertical, 
  FeaturedHorizontal, 
  MovieInfo, 
  MovieDescription,
  ButtonToSee,
  ButtonAdd,
  Buttons
} from './styles';

function FeaturedMovie({ featured }) {

  let firstDate = new Date(featured.first_air_date);

  return (
    <FeaturedContainer style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${featured.backdrop_path})`
    }}>
      <FeaturedVertical>
        <FeaturedHorizontal>
          <h2>{featured.original_name}</h2>
          <MovieInfo>
            <h3>{featured.vote_average} pontos</h3>
            <h4>{firstDate.getFullYear()}</h4>
          </MovieInfo>
          <MovieDescription>
            {featured.overview}
          </MovieDescription>
          <Buttons>
            <ButtonToSee>▶ Assistir</ButtonToSee>
            <ButtonAdd>+ Minha lista</ButtonAdd>
          </Buttons>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </FeaturedContainer>
  );

}

export default FeaturedMovie;