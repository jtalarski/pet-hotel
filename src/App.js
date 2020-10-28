import './App.css';
import Owner from './Owner/Owner';
import { HashRouter as Router, Route } from 'react-router-dom';
import petsPage from './petsPage/petsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route
          // shows AboutPage at all times (logged in or not)
          exact
          path='/pets'
          component={petsPage}
        />
        <Route render={() => <h1>404</h1>} />
        <Owner />
    </div>
    </Router>
  );
}

export default App;
