import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending}
        isLargeRow={true} 
      />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true} 
      />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.fetchActionMovies} 
        isLargeRow={true}
      />
      <Row 
        title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies} 
        isLargeRow={true}
      />
      <Row 
        title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row 
        title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true} 
      />
      <Row 
        title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true} 
      />
    </div>
  );
}

export default App;
