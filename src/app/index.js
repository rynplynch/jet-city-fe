
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components'
import { ClientPage, ProjectPage} from '../pages'
import GlobalStyles from '../style/GlobalStyles'
import { Container } from '../style/GlobalStyles'
import configureStore from '../store/configureStore'
import { Provider } from 'react-redux'
const store = configureStore();

function App() {

    // const triggerText = 'Open Form';
    // const onSubmit = (event) => {
    //     event.preventDefault(event);
    //     console.log(event.target.name.value);
    //     console.log(event.target.email.value);
    // };
    return (
      <Provider store={store}>
        <Router >
          <GlobalStyles/>
          <NavBar/>
          <Switch>
            <Route path="/show/cards/clients" exact component={ClientPage} />
            <Route path="/show/cards/client/project/:id" exact component={ProjectPage} />
          </Switch>
        </Router>
      </Provider>      
    )
}

export default App