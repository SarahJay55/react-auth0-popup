import React, { useState, useEffect } from "react";
import "./styles.css";

function TvShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("/api/data/tvShows")
      .then(response => response.json())
      .then(data => {
        setShows(data);
      });
  }, []); // empty array because we only run once

  return (
    <div>
      <h1>TV SHOWS</h1>
      {shows.map(shows => (
        <div className="card" key={shows.id}>
          <h3>{shows.name}</h3>
          <h5>{shows.airDate}</h5>
        </div>
      ))}
    </div>
  );
}

export default TvShows;
