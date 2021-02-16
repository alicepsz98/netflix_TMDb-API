import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import tmdb from '../../services/tmdb';
import { HomeContainer, Loading } from './styles';

function HomePage() {

  const [moviesList, setMoviesList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    loadAllMovies()
  }, []);

  const loadAllMovies = async () => {
    let list = await tmdb.getHomeList();
    setMoviesList(list)
    let originals = list.filter(
      item => item.slug === 'originals'
    );
    let randomChosenMovie = Math.floor(
      Math.random() * (originals[0].items.results.length -1)
    );
    let chosenMovie = originals[0].items.results[randomChosenMovie];
    setFeaturedData(chosenMovie);
  };

  return (
    <HomeContainer>
      <Header />
      {featuredData && 
        <FeaturedMovie 
          featured={featuredData} 
        />
      }
      <section>
        {moviesList.map((item, key) => (
          <MoviesList
            key={key}
            movie={item}
          />
        ))}
      </section>
      {moviesList.length <= 0 && 
        <Loading>
          Loading...
        </Loading>
      }
      <Footer />
    </HomeContainer>
  );
}

export default HomePage;
