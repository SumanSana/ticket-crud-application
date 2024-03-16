package com.ticket.app.backend.repository;



import com.ticket.app.backend.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TicketsRepo extends JpaRepository<Ticket,Integer> {

}
