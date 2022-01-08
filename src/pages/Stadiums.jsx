import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../style/stadium.css'

const Stadiums = () => {
  const [stadiums, setStadiums] = useState(null);

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
        setStadiums(data.response)
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="header">
        <h1>ESTADIOS</h1>
        <p>Todos los estadios de primera division.</p>
        <div className="div-container-stadium">
          {stadiums ? stadiums.map((stadiums1) => (<div className="div-stadium" key={stadiums1.team.id}>
            <img
              src={ stadiums1.venue.image }
              alt="Estadio"
              className="img-stadium"
            />
            <div>
              <p>{ stadiums1.venue.name }</p>
              <p> Capacidad: { stadiums1.venue.capacity }</p>
            </div>
          </div>)) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stadiums;
