import React, { useEffect, useState } from "react";
import "./Movies.css";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({handelAddToWatchlist, handelRemoveFromWatchlist, watchlist}) => {

  const [movies, setMovies] = useState([]);

  const [pageNo, setpageNo] = useState(1);

  

 

  const handelPrev = () => {
    if (pageNo > 1) {
      setpageNo(pageNo - 1);
    }
  };

  const handelNext = () => {
    setpageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b8f27c1412d861df06105ff6e651985e&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <>
      <div>
        <div className="trending-movies">Trending Movies</div>
      </div>
      <div className="card">
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              poster_path={movie.poster_path}
              name={movie.title}
              handelAddToWatchlist={handelAddToWatchlist}
              handelRemoveFromWatchlist= {handelRemoveFromWatchlist}
              movie={movie}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handelPrev={handelPrev}
        handelNext={handelNext}
      />
    </>
  );
};

export default Movies;

//"https://api.themoviedb.org/3/movie/popular?api_key=b8f27c1412d861df06105ff6e651985e&language=en-US&page=1"
