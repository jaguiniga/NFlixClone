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
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" 
      fetchURL={requests.fetchTrending}
      isLargeRow={true} />
      <Row title="Top Rated" 
      fetchURL={requests.fetchTopRated}
      isLargeRow={true} />
      <Row title="Action Movies" 
      fetchURL={requests.fetchActionMovies} 
      isLargeRow={true}/>
      <Row title="Comedy Movies" 
      fetchURL={requests.fetchComedyMovies} 
      isLargeRow={true}/>
      <Row title="Horror Movies" 
      fetchURL={requests.fetchHorrorMovies}
      isLargeRow={true}
       />
      <Row title="Romance Movies" 
      fetchURL={requests.fetchRomanceMovies}
      isLargeRow={true} />
      <Row title="Documentaries" 
      fetchURL={requests.fetchDocumentaries}
      isLargeRow={true} />
    </div>
  );
}

export default App;
