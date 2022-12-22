import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components'
import { ClientPage, ProjectPage, WorkstationPage } from '../pages'
import GlobalStyles from '../style/GlobalStyles'
import configureStore from '../store/configureStore'
import { Provider } from 'react-redux'
import React from 'react'

const store = configureStore();

function App() {
    return (
    <Provider store={store}>
      <Router >
        <GlobalStyles/>
        <NavBar/>
        <Switch>
          <Route path="/show/cards/clients" exact component={ClientPage} />
          <Route path="/show/cards/client/projects/:id" exact component={ProjectPage} />
          <Route path="/show/cards/project/workstations/:id" exact component={WorkstationPage} />
        </Switch>
      </Router>
    </Provider>
    )
}

export default App
