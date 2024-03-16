package com.ticket.app.backend.controller;


import com.ticket.app.backend.dto.TicketDto;
import com.ticket.app.backend.entity.Ticket;
import com.ticket.app.backend.exception.TicketNotFoundException;
import com.ticket.app.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TicketController {

    @Autowired
    private TicketService ticketService;
    
    @PostMapping("/tickets")
    public Ticket saveTicket(@RequestBody TicketDto ticketDto) {
        return ticketService.save(ticketDto);
    }

    @GetMapping("/tickets")
    public List<Ticket> getAll() {
        return ticketService.findAll();
    }

    @PutMapping("/tickets")
    public Ticket updateTicket(@RequestBody TicketDto ticketDto) {
    	System.out.println(ticketDto);
    	System.out.println(ticketDto);
        return ticketService.update(ticketDto);
    }

    @GetMapping("/tickets/{ticketId}")
    public ResponseEntity<Ticket> findTicketById(@PathVariable Integer ticketId)
    {
        Ticket tickets= ticketService.findById(ticketId);
        return ResponseEntity.ok().body(tickets);
    }

    @DeleteMapping("/tickets/{ticketId}")
    public String deleteTicket(@PathVariable Integer ticketId) {
        ticketService.delete(ticketId);
        return "Deleted ticket id - " + ticketId;
    }










}





