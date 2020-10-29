import './App.css';
import Owner from './Owner/Owner';
import { HashRouter as Router, Route } from 'react-router-dom';
import Pets from './Pets/Pets';

function App() {
  return (
    <Router>
      <div className='App'>
        <Pets />
        <Route render={() => <h1>404</h1>} />
        <Owner />

      </div>
    </Router>
  );
}

export default App;
