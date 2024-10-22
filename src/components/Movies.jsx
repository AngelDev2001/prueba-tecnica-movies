const ListMovies = ({ movies }) => {
  return (
    <ul className="movies-list">
      {movies?.map((movie) => (
        <li key={movie.id}>
          <div className="img-container">
            <img src={movie.poster} alt={movie.title} />
          </div>
          <div className="text-movie">
            <h3>{movie.title}</h3>
            <p>Año: {movie.year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const NoMovies = ({ movies }) => {
  return <p>No hay resultados para su búsqueda</p>;
};

export const Movies = ({ movies }) => {
  const isHaveMovies = movies?.length > 0;

  return isHaveMovies ? <ListMovies movies={movies} /> : <NoMovies />;
};
