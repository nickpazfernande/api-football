import React, { useEffect, useState } from "react";
import "../style/team.css";

const Team = () => {
  const [team, setTeam] = useState(null);
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    fetch(
      "https://v3.football.api-sports.io/teams?country=Uruguay&league=270&season=2021",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "ccf0502781334fde338f2391b1c5e51f",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setTeams(data.response);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function verEstado() {
    console.log(team);
  }
  return (
    <div className="container-main">
      {teams
        ? teams.map((team1) => (
            <div className="container" key={team1.team.id}>
              <div className="div-logo">
                <img
                  src={team1.team.logo}
                  alt="logo de Nacional"
                  className="img-logo"
                />
              </div>
              <div className="info-team">
                <h1>{team1.team.name}</h1>
                <p>Fundado: {team1.team.founded}</p>
                <p>Estadio: {team1.venue.name}</p>
                <button onClick={verEstado} className="btn-primary">
                  Ver jugadores
                </button>
              </div>
            </div>
          ))
        : null}
      <br />
    </div>
  );
};

export default Team;
