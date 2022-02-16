import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../AddMatch/styles'
import { Button } from 'react-bootstrap'


export function ShowStatistics() {
  const [teamName, setTeamName] = useState("")

  return(
    <Container>
      <h1>Show statistics</h1>
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
        <Button >Show</Button>
        </Link>
      </div>
    </Container>
  )
}