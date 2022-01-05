import React, { useEffect, useState } from "react";
import '../style/team.css'

const Team = () => {
    const [team, setTeam] = useState(null)
    const [name, setName] = useState('')

  useEffect(() => {
    fetch("https://v3.football.api-sports.io/teams?id=2356&country=Uruguay", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ccf0502781334fde338f2391b1c5e51f",
        "x-rapidapi-host": "v3.football.api-sports.io",    
      },
    })
      .then((response) => response.json())
      .then((data) => {
            
            console.log(data)
            const teamData = {
                nombre: data.response[0].team.name,
                founded: data.response[0].team.founded,
                img : data.response[0].team.logo,
            }
            setTeam(teamData);
        })
      .catch((error) => console.log("error", error));
  }, []);

  function verEstado (){
      console.log(team)
  }
  return <div className="container">
      <button onClick={verEstado} className="btn-primary">click</button>
      <p></p>
  </div>;
};

export default Team;
