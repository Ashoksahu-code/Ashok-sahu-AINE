
import './App.css';
import {ToastContainer, toast} from 'react-toastify'
import {Button, Container} from "reactstrap";
import {Row, Col} from 'reactstrap'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import ListEmployee from './employees/ListEmployee'
import FooterComponet from './employees/FooterComponet';
import HeaderComponent from './employees/HeaderComponent';
import AddEmployee from './employees/AddEmployee';
import UpdateEmployee from './employees/UpdateEmployee'


function App() {
  return (
    <div>
      <Router>
     
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployee}></Route>
                <Route path="/employees" component={ListEmployee}></Route>
                <Route path="/add-employees" exact component={AddEmployee}></Route>
                <Route path="/update-employees" exact component={UpdateEmployee}></Route>

              </Switch>
            </div>
          {/* <FooterComponet/> */}
       
      </Router>
    </div>    
  );
}

export default App;
