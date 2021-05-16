
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components'
import {ClientInsert, ClientList, ClientUpdate} from '../pages'
import {ProjectInsert, ProjectList, ProjectUpdate} from '../pages'
import {WorkstationInsert, WorkstationList, WorkstationUpdate} from '../pages'
import '../style/App.css'
function App() {


    return (
        <Router>
            <NavBar />
            <Switch>

                <Route path="/client/list" exact component={ClientList} />
                <Route path="/client/create" exact component={ClientInsert} />
                <Route
                    path="/client/update/:id"
                    exact
                    component={ClientUpdate}
                />

                <Route path="/project/create/:id" exact component={ProjectInsert} />
                <Route path="/project/list/:id" exact component={ProjectList} />
                <Route
                    path="/project/update/:id"
                    exact
                    component={ProjectUpdate}
                />

                <Route path="/workstation/create/:id" exact component={WorkstationInsert} />
                <Route path="/workstation/list/:id" exact component={WorkstationList} />
                <Route
                    path="/workstation/update/:id"
                    exact
                    component={WorkstationUpdate}
                />

            </Switch>
        </Router>
    )
}

export default App