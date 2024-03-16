package com.ticket.app.backend.service;


import com.ticket.app.backend.dto.TicketDto;
import com.ticket.app.backend.entity.Ticket;
import com.ticket.app.backend.entity.User;
import com.ticket.app.backend.exception.TicketNotFoundException;
import com.ticket.app.backend.repository.TicketsRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketsRepo ticketsRepo;
    
    @Autowired
    private UserService userService;
    
    public Ticket createEntityFromDto(TicketDto dto) {
    	Ticket t = new Ticket();
    	t.setId(dto.getId());
    	t.setSubject(dto.getSubject());
    	t.setDescription(dto.getDescription());
    	t.setPriority(dto.getPriority());
    	t.setStatus(dto.getStatus());
    	t.setCreatedAt(dto.getCreatedAt());
    	t.setUpdatedAt(dto.getUpdatedAt());
    	t.setUser(userService.findById(dto.getUserId()));
    	t.setAssignedTo(userService.findById(dto.getAssignedToUserId()));
    	return t;
    }


    public List<Ticket> findAll() {
        List<Ticket> list= ticketsRepo.findAll();
        return list;
    }

    public Ticket findById(int ticketId) {
        return ticketsRepo.findById(ticketId).orElseThrow(() -> new TicketNotFoundException("Ticket not found for id " + ticketId));
    }

    public Ticket save(TicketDto ticketDto) {
        return ticketsRepo.save(createEntityFromDto(ticketDto));
    }


    public void delete(Integer ticketId) {
        ticketsRepo.deleteById(ticketId);
    }

    //write a method to update a ticket

    public Ticket update(TicketDto ticketDto) {
        return ticketsRepo.save(createEntityFromDto(ticketDto));
    }

}
