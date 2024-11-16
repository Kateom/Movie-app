import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Movies from "./Component/Movies";
import Watchlist from "./Component/Watchlist";
import Banner from "./Component/Banner";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handelAddToWatchlist = (movie) => {
    const movieExist = watchlist.some((item) => item.id === movie.id);
    if (!movieExist) {
      let newwatchlist = [...watchlist, movie];
      localStorage.setItem('movies', JSON.stringify(newwatchlist))
      setWatchlist(newwatchlist);
      console.log(newwatchlist);
    } else {
      alert("Movie Alrerady Exists");
    }
  };

  let handelRemoveFromWatchlist = (movie) => {
    let filteredWawtchlist = watchlist.filter((movieid)=>{
      return movieid.id !== movie.id;
      
    });

    localStorage.setItem('movies', JSON.stringify(filteredWawtchlist));
    setWatchlist(filteredWawtchlist); 
    console.log(filteredWawtchlist);
  }
    

  useEffect(()=>{
    let moviefromlocalstorage = localStorage.getItem('movies')
    if(!moviefromlocalstorage){
      return
    }
    setWatchlist(JSON.parse(moviefromlocalstorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist= {watchlist} handelAddToWatchlist={handelAddToWatchlist} handelRemoveFromWatchlist={handelRemoveFromWatchlist}  />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist  watchlist={watchlist} handelRemoveFromWatchlist = {handelRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
