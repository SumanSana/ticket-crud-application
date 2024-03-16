import './App.css';
import { TicketList } from './components/TicketList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import  NewTicket  from './components/NewTicket';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/tickets"/>
        </Route>
        <Route path="/tickets">
          <TicketList/>
        </Route>
        <Route path="/newTicket">
          <NewTicket/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
