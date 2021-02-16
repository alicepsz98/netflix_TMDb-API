const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b"
const API_BASE = "https://api.themoviedb.org/3"

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json();
  return json;
} 

export default {

  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Lançamentos',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'movies',
        title: 'Filmes',
        items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'series',
        title: 'Séries',
        items: await basicFetch(`/discover/tv?language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  }

};