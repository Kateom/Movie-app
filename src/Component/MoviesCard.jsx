import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({
  poster_path,
  name,
  handelAddToWatchlist,
  movie,
  handelRemoveFromWatchlist,
  watchlist,
}) => {
  let isContain = (movie) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        height={"300px"}
        className="movie-card"
      />

      {isContain(movie) ? (
        <div
          className="movie-icon"
          onClick={() => handelRemoveFromWatchlist(movie)}
        >
          &#10060;
        </div>
      ) : (
        <div className="movie-icon" onClick={() => handelAddToWatchlist(movie)}>
          &#128525;
        </div>
      )}

      <div className="card-name">{name}</div>
    </div>
  );
};

export default MoviesCard;
