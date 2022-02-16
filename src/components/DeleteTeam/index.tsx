import { useState } from 'react';
import { Container } from './styles';

import { Link } from 'react-router-dom';
import { api } from '../../services/api';

export function DeleteTeam() {
  const [teamName, setTeamName] = useState("")

  function handleRemoveTeams(name: String) {
    api.delete(`/delete/${name}`)
    setTeamName("")
  }

  return (
    <Container>
      <h1>Delete a team</h1>
      <div>
        Insert club name
        <input 
          type="text"
          name="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <br />
        <Link to="/">
        <button onClick={() => handleRemoveTeams(teamName)}>Delete</button>
        </Link>
      </div>
    </Container>
  )
}