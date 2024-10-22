import reponseMovies from "../mockus/with-movies.json";

export const useMovies = () => {
  const movies = reponseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
};
