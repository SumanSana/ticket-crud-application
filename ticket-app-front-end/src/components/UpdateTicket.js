import React from "react";
import { useState, useEffect } from 'react'

const UpdateTicket = ({ ticket, setUpdated, onClose }) => {

    const [updatedTicket, updateTicket] = useState({...ticket,userId:ticket.user.id,assignedToUserId:ticket.assignedTo.id});

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        updateTicket({
            ...updatedTicket,
            [e.target.name]: e.target.value,
            updatedAt: new Date(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveTicket = async () => {
            const response = await fetch('http://localhost:8080/tickets', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTicket)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            alert(`Ticket ${data.id} is updated`);
            onClose();
            setUpdated(true);
        }
        saveTicket().catch((error) => {
            console.error('Failed to update ticket:', error);
        });
        e.target.reset();
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Subject:</label>
                <input type="text" name="subject" onChange={handleChange} className="form-control" value={updatedTicket.subject} />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea name="description" onChange={handleChange} className="form-control" value={updatedTicket.description} />
            </div>
            <div className="form-group">
                <label>Priority:</label>
                <select name="priority" onChange={handleChange} className="form-control" value={updatedTicket.priority}>
                    <option value="">Select priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className="form-group">
                <label>Status:</label>
                <select name="status" onChange={handleChange} className="form-control" value={updatedTicket.status}>
                    <option value="">Select status</option>
                    <option value="Open">Open</option>
                    <option value="Pending">Pending</option>
                    <option value="Closed">Closed</option>
                </select>
            </div>
            <div className="form-group">
                <label>Assigned To:</label>
                <select name="assignedToUserId" onChange={handleChange} className="form-control" value={updatedTicket.assignedToUserId}>
                    <option value="">Assigne to</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default UpdateTicket;
