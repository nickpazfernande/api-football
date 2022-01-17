import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useGetData from "../hooks/useGetData";
import "../style/home.css";


const Home = () => {
  const API = "https://v3.football.api-sports.io/fixtures?live=all";
  const [match, setMatch] = useState(null);
  setMatch(() => setMatch(API))

  

  //team1.team.id
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <h1 className="title-home">Partidos en vivo</h1>
        {match
          ? match.map((match1) => (
              <div className="container-home" key={match1.fixture.id}>
                <div className="team-home">
                  <h1>{match1.teams.home.name}</h1>
                  <img
                    src={match1.teams.home.logo}
                    className="img-team"
                    alt="Equipo local"
                  />
                  <h2 className="score"> {match1.goals.home} </h2>
                </div>
                <div className="div-vs">
                  <h1>VS</h1>
                  <p> {match1.fixture.status.elapsed} ' </p>
                </div>
                <div className="team-away">
                  <h1>{match1.teams.away.name}</h1>
                  <img
                    src={match1.teams.away.logo}
                    className="img-team"
                    alt="Equipo visitante"
                  />
                  <h2 className="score">{match1.goals.away}</h2>
                </div>
              </div>
            ))
          : null}
      </header>
      <Footer />
      
    </div>
  );
};

export default Home;
