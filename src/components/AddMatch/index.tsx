import React, { useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';




export function AddMatch() {

  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [teamAScore, setTeamAScore] = useState("");
  const [teamBScore, setTeamBScore] = useState("");

  function handleAddTeam() {

    api.post('/match', {
      teamA: teamA,
      teamB: teamB,
      teamAScore: teamAScore,
      teamBScore: teamBScore
    });

    setTeamA("")
    setTeamB("")
    setTeamAScore("")
    setTeamBScore("")
  };


  return(
    <Container>
      <h1>Create a match</h1>
      <div>
        Insert home team name: 
        <input 
          type="text"
          name="teamA"
          value={teamA}
          onChange={(e) => setTeamA(e.target.value)}
        />
        <br />
        <br />
        Insert away team name:
        <input 
          type="text"
          name="teamB"
          value={teamB}
          onChange={(e) => setTeamB(e.target.value)}
        />
        <br />
        <br />
        Insert home team score:
        <input 
          type="text"
          name="teamAScore"
          value={teamAScore}
          onChange={(e) => setTeamAScore(e.target.value)}
        />
        <br />
        <br />
        Insert away team score:
        <input 
          type="text"
          name="teamBScore"
          value={teamBScore}
          onChange={(e) => setTeamBScore(e.target.value)}

        />
        <br />
        <br />
        <Link to="/">
          <button onClick={handleAddTeam}>Send</button>
        </Link>
      </div>
    </Container>
    
  )
}