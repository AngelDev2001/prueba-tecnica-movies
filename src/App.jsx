import withoutMovies from "./mockus/without-movies.json";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useRef } from "react";

function App() {
  const { movies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));
    console.log(fields);
  };

  return (
    <div className="app">
      <header>
        <h1>Catálogo de películas</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            placeholder="Busca tu película favorita..."
          />
          <button type="submit">Buscar película</button>
        </form>
      </header>
      <main className="movies">
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
