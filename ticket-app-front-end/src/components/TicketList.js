import {useEffect,useState} from 'react';
import { TicketDetails } from './TicketDetails';

export const TicketList=()=>{
    const [tickets,setTickets] = useState([]);
    const [httpError,setHttpError] = useState('');
    const [searchId,setSearchId] = useState('');
    const [deleted,setDeleted]=useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(()=>{
        const fetchTickets = async ()=>{
            const url = "http://localhost:8080/tickets"
            let baseUrl=url;
            console.log(!searchId=='');
            if(!searchId=='')
                baseUrl=`${url}/${searchId}`;
            const response = await fetch(baseUrl);
            let responseJson;
            if(!response.ok)
                throw new Error("Something went wrong");

            responseJson = await response.json();
            console.log(responseJson);
            if(searchId=='')
                setTickets(responseJson);
            else
                setTickets([responseJson]);
        }
        fetchTickets().catch((error)=>{
            console.log(error);
            setHttpError(error);
        })
    },[searchId,deleted,updated])

    const onClickHandler = (e)=>{
        e.preventDefault();
        setSearchId(document.getElementById("searchById").value);
    }

    if(httpError){
        console.log("Hi");
        return(
            <div>{httpError.message}</div>
        )
    }
    
    return(
        <div>
            <div className="row">
                <form className="col-md-6"> 
                    <div className="input-group">
                        <input type="text" className="form-control" id="searchById" placeholder="Type Id to Search"/>
                        <div className="input-group-btn">
                        <button className="btn btn-default" type="submit" onClick={onClickHandler}>
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                        </div>
                    </div>
                </form>
            </div>
            <br></br>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>User</th>
                    <th>Assigned To</th>
                    <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket=>(
                        <TicketDetails ticket={ticket} setDeleted={setDeleted} setUpdated={setUpdated} key={ticket.id}/>
                    ))}
                </tbody>
            </table>
        </div> 
    )

}
