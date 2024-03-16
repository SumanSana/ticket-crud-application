package com.ticket.app.backend.service;


import com.ticket.app.backend.entity.User;
import com.ticket.app.backend.repository.TicketsRepo;
import com.ticket.app.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    // inject the UserRepo bean here
    @Autowired
    private UserRepo userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(int id) {
        return userRepository.findById(id).get();
    }










}
