import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from './templates/HomeTemplate';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';


export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserLoginTemplate exact path={'/login'} component={Login} />
        <HomeTemplate exact path={'/register'} component={Register} />
        <HomeTemplate exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
