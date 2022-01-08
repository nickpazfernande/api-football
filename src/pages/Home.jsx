import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/home.css";


const Home = () => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ccf0502781334fde338f2391b1c5e51f",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setMatch(data.response);
      })
      .catch((error) => console.log("error", error));
  }, []);

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
