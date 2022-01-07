import React from "react";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
import "../style/infoTeam.css";

const InfoTeam = () => {
  return (
    <div>
      <Navbar />
      <div className="container-infoTeam">
        <h1 className="title-infoTeam">Equipos</h1>
        <p>Todos los equipos de primera division del futbol uruguayo.</p>
      </div>
      <Team />
    </div>
  );
};

export default InfoTeam;
