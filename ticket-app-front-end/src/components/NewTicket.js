import React, { useState, useEffect } from 'react';

const NewTicket = () => {
  const [ticket, setTicket] = useState({
    subject: '',
    description: '',
    priority: '',
    status: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '',
    assignedTo: ''
  });

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saveTicket = async()=>{
        const response = await fetch('http://localhost:8080/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();    
        alert(`Ticket Created With Id: ${data.id}`);
    }
    saveTicket().catch((error)=>{
        console.error('Failed to save ticket:', error);
    });
    e.target.reset();
}

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

  return (
    <form onSubmit={handleSubmit} className="container mt-4" style={{ paddingBottom: '100px' }}>
        <div className="form-group">
            <label>Subject:</label>
            <input type="text" name="subject" onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label>Description:</label>
            <textarea name="description" onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
            <label>Priority:</label>
            <select name="priority" onChange={handleChange} className="form-control">
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </div>
        <div className="form-group">
            <label>Status:</label>
            <select name="status" onChange={handleChange} className="form-control">
                <option value="">Select status</option>
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Closed">Closed</option>
            </select>
        </div>
        <div className="form-group">
            <label>User:</label>
            <select name="userId" onChange={handleChange} className="form-control">
            <option value="">Select user</option>
            {users.map(user => (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        ))}
        </select>
        </div>
        <div className="form-group">
            <label>Assigned To:</label>
            <select name="assignedToUserId" onChange={handleChange} className="form-control">
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

export default NewTicket;