import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './layout/LandingPage';
import About from './layout/About';
import Team from './layout/Team';
import Contact from './layout/Contact';
import CurrentClients from './layout/CurrentClients';
import Main from './layout/Main';

import { routes } from './RouteConstants';

import './App.css';

function App() {
  return (
  	<BrowserRouter>
      <div className="app h-full max-h-none">
        <Switch>
           <Route exact path={routes.landing} component={LandingPage} />
           <Route exact path={routes.home} component={Main} />
           <Route exact path={routes.about} component={About} />
           <Route exact path={routes.team} component={Team} />
           <Route exact path={routes.portfolio} component={CurrentClients} />
           <Route exact path={routes.contact} component={Contact} />
           <Redirect from="/" to={routes.landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
