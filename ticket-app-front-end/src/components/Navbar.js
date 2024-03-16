//create react functional component for navigation bar with three links Verizon, Tickets and New Ticket
import { NavLink } from "react-router-dom"
import { setSearchId } from "./TicketList"
export const Navbar = ()=>{
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Ticket Management Tool</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><NavLink to="/tickets">Tickets</NavLink></li>
                <li><NavLink to="newTicket">New Ticket</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}