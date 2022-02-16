import React, { useState } from 'react';
import { 
  Container, 
  Button 
} from './styles';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';


export function AddTeam() {
  const [teamName, setTeamName] = useState("")
  const [locationTeam, setLocationTeam] = useState("")


  function handleAddTeam() {

    api.post('/add', {
      name: teamName,
      location: locationTeam,
    });

    setTeamName("")
    setLocationTeam("")
    
  };

  return(
    <>
    <Container>
      <h1>Adicionar o time</h1>
      <div>
        Insert club name
        <input 
          type="text"
          name="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <br />
        Insert club location
        <input 
          type="text"
          name="locationTeam"
          value={locationTeam}
          onChange={(e) => setLocationTeam(e.target.value)}
        />
        <br />
        <Link to="/">
        <Button onClick={handleAddTeam}>Send</Button>
        </Link>
      </div>
    </Container>
    </>
  )
}