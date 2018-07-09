import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { MainContainer } from './containers'
import { ProfilePage, StatisticsPage } from './Pages'

const App = () => (
  <MainContainer>
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route exact path="/statistics" component={StatisticsPage} />
    </Switch>
  </MainContainer>
)

export default App
