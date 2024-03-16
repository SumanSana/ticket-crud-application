import { useState } from 'react'
import Modal from './Modal';
import UpdateTicket from './UpdateTicket';
export const TicketDetails = ({ ticket, setDeleted, setUpdated }) => {


  const [modalOpen, setModalOpen] = useState(false);


  const closeModal = () => {
    setModalOpen(false);
  }

  const deleteTicket = async () => {
    try {
      console.log(`Hi ${ticket.id}`);
      const response = await fetch(`http://localhost:8080/tickets/${ticket.id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert(`Ticket Deleted With Id: ${ticket.id}`);
      setDeleted(true);

    } catch (error) {
      console.error('Failed to delete the ticket:', error);
      alert('Failed to delete the ticket. Please try again.');
    }
  }

  return (
    <tr>
      <td>{ticket.id}</td>
      <td>{ticket.subject}</td>
      <td>{ticket.description}</td>
      <td>{ticket.priority}</td>
      <td>{ticket.status}</td>
      <td>{ticket.createdAt}</td>
      <td>{ticket.updatedAt}</td>
      <td>{ticket.user.name}(Id : {ticket.user.id})</td>
      <td>{ticket.assignedTo.name}(Id : {ticket.assignedTo.id})</td>
      <td>
        <button className="btn btn-danger" onClick={deleteTicket}>Delete</button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Update</button>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <UpdateTicket setUpdated={setUpdated} ticket={ticket} onClose={closeModal} />
          </Modal>
        )}
      </td>
    </tr>
  );



}