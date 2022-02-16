import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddMatch } from '../components/AddMatch';
import { DeleteTeam } from '../components/DeleteTeam';
import { Teste } from '../components/Teste';
import { Home } from '../pages/Home';
import { Team } from '../pages/Team';


export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/addTeam" component={Team} />
    <Route path="/deleteTeam" component={DeleteTeam} />
    <Route path="/addMatch"component={AddMatch} />
    <Route path="/statistics"component={Teste} />
  </Switch>
);

export default Routes;