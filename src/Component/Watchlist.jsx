import React, { useState } from "react";
import "./Watchlist.css";

const Watchlist = ({watchlist, handelRemoveFromWatchlist}) => {

  const cleanString = (str) => {
    return str.replace(/[.: ]/g, "").trim();
  }

  const [search, updateSearch] = useState(""); 

  const handelSearch = (e) => {
    updateSearch(e.target.value);
  }

  return (
    <>

      {/* <div className="genre-container">
        <div className="genre">Action</div>
        <div className="genre color">Action</div>
        <div className="genre">Action</div>
      </div> */}

      <div className="watchlist">
        <input type="text" name="text" id="text" placeholder="Search Movies" onChange={handelSearch} />
      </div>

      <table className="">
        <thead>
            <tr>
                <th class="name-column">Name</th>
                <th>Rating</th>
                <th>Popularity</th>
                <th>Genre</th>
            </tr>
        </thead>

        {watchlist.filter((movie)=>{
          return cleanString(movie.title).toLowerCase().includes(search.toLowerCase())
        }).map((movie)=>{
          return <tbody>
          <tr>
              <td class="name-column">
              <div class="movie-details">
                     <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}` } className="movie-poster" alt="This is movie poster"/>
                      <div className="movie-name" key={watchlist.id}>{movie.title}</div >
                  </div>
              </td>
              <td>{movie.vote_average}</td>
              <td>{movie.popularity}</td>
              <td>Drama</td>
              <td className="movie-remove" onClick={()=>handelRemoveFromWatchlist(movie)}>Delete</td>
          </tr>
          
      </tbody>
        })}

        
    </table>

      

    


    
    </>
  );
};

export default Watchlist;
