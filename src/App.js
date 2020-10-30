import './App.css';
import Owner from './Owner/Owner';
import { HashRouter as Router, Route } from 'react-router-dom';
import Pets from './Pets/Pets';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route
          exact path="/pet"
          component={Pets}
        />
        <Route
          exact path="/owner"
          component={Owner}
        />
      </div>
    </Router>
  );
}

export default App;
