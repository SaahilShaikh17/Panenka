//home.jsx
import React from 'react'
import './home.css'
import { UncontrolledExample } from '../../components/uncontrolledexample';
import { FantasyTemplate } from '../home/fantasyTemplate';
import { FANTASYCONTENT } from '../../fantasyContent';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FixtureHome } from '../../components/fixtureHome';


export const Home = () => {

  const [standingsData, setStandingsData] = useState(null);


  const fetchdata = useMemo(() => async () => {
    

    const apiUrl = 'https://v3.football.api-sports.io/standings?league=39&season=2023';
  
    const axiosConfig = {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '5f36c45abe561f32839aeeae30b183e6', 
      },
    };
    // Fetch fixtures and update state
    axios.get(apiUrl,axiosConfig)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setStandingsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching fixtures data:', error);
      });
  
},[]);

useEffect(()=>{
  fetchdata()
},[fetchdata]);

  return (
    <div className='homePage'>
      <div className="homeTitle">
      </div>
      <div className='carousel'>
      <UncontrolledExample />
      </div>

      <div class="flex-container">

      <div class="homefixtures">
        <FixtureHome/>
        </div>
          
        
        <div class="flex-child green">

          <div className='tablePage'>
      <div className='tableTitle'>Table</div> 
      {standingsData && standingsData.response && standingsData.response[0] && standingsData.response[0].league && standingsData.response[0].league.standings ? (
      <div className="table-responsive-lg">
      <table className="table table-striped table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Pos</th>
            <th scope="col">Team</th>
            <th scope="col">Matches Played</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
            {standingsData.response[0].league.standings[0].map((team) => (

              team.rank < 11 && (
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
                <td>{team.points}</td>
                
              </tr>
              )
            ))}
          </tbody>
        </table>
        </div>
      ): (
        <h1 className='Load'>Loading data...</h1>
      )}
    </div>
    <a href='/table'><button type="button" class="btn btn-outline-danger btn-lg" style={{backgroundColor:"black", color:"white"}}>View full table</button></a>
    {/* <button type="button" class="btn btn-primary btn-lg" style={{backgroundColor:"black", borderColor:"black"}}>View full table</button> */}
        </div>
    </div>

      <div className="fantasyTitle">
        <h1>Fantasy News</h1>
      </div>
      <div className="gridTry">
        {FANTASYCONTENT.map((fantasyTemplate) => (
          <FantasyTemplate data={fantasyTemplate} />
        ))}
      </div>
    </div>
  )
}
