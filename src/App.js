import './App.css';
import EmployeeList from './Components/EmployeeList';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/employeeList' component={EmployeeList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
