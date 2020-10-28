import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import petsPage from './petsPage/petsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <Route
          // shows AboutPage at all times (logged in or not)
          exact
          path='/pets'
          component={petsPage}
        />
        <Route render={() => <h1>404</h1>} />
      </div>
    </Router>
  );
}

export default App;
