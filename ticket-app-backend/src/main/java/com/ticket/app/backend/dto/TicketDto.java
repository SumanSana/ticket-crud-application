package com.ticket.app.backend.dto;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ticket.app.backend.entity.Ticket;
import com.ticket.app.backend.service.UserService;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties
public class TicketDto {

	private int id;
	private String subject;
	private String description;
	private String priority;
	private String status;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private int userId;
	private int assignedToUserId;

}
