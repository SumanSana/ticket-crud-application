package com.ticket.app.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;
import com.ticket.app.backend.entity.User;



@Data
@NoArgsConstructor
@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tickets_id_seq")
    @SequenceGenerator(name = "tickets_id_seq", sequenceName = "tickets_id_seq", allocationSize = 1)
    @Column(name = "id")
    private int id;

    @Column(name = "subject")
    private String subject;
    @Column(name = "description")
    private String description;
    @Column(name = "priority")
    private String priority;
    @Column(name = "status")
    private String status;
    @Column(name = "createdAt")
    private Timestamp createdAt;
    @Column(name = "updatedAt")
    private Timestamp updatedAt;
    
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="assigned_to")
    private User assignedTo;

    

}
