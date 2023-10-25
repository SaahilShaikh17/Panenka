import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css'

export const Table =()=> {
  const [standingsData, setStandingsData] = useState(null);

  useEffect(() => {
    // API URL
    const apiUrl = 'https://v3.football.api-sports.io/standings?league=39&season=2023';

    // Axios configuration
    const axiosConfig = {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '5f36c45abe561f32839aeeae30b183e6',
      },
    };

    // Make the GET request using Axios
    axios.get(apiUrl, axiosConfig)
      .then((response) => {
        // Data successfully fetched, storing it in the component's state
        setStandingsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div className='tablePage'>
      <div className='tableTitle'>Standings</div> 
      {standingsData && standingsData.response && standingsData.response[0] && standingsData.response[0].league && standingsData.response[0].league.standings ? (
      <div className="table-responsive-lg">
      <table className="table table-striped table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Pos</th>
            <th scope="col">Team</th>
            <th scope="col">Matches Played</th>
            <th scope="col">Won</th>
            <th scope="col">Drawn</th>
            <th scope="col">Lost</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
            <th scope="col">Points</th>
            <th scope="col">Form</th>
          </tr>
        </thead>
        <tbody>
            {standingsData.response[0].league.standings[0].map((team) => (
              <tr key={team.team.id}>
                <td>{team.rank}</td>
                <td>
                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    width="30"
                    height="30"
                  />
                  {team.team.name}
                </td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>{team.all.goals.for}</td> 
                <td>{team.all.goals.against}</td>
                <td>{team.goalsDiff}</td>
                <td>{team.points}</td>
                <td>{team.form}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ): (
        <h1 className='Load'>Loading data...</h1>
      )}
    </div>
  );
}

export default Table;