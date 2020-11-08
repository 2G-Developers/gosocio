import './style/main.scss'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
