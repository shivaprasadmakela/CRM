package com.crm_core.backend.security.controller;

import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;
import com.crm_core.backend.security.model.Student;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class StudentController {
    private List<Student> students =new ArrayList<>(List.of(
        new Student(1,"Shiva",100),
        new Student(1,"Prasad",100)

    ));
    
    @GetMapping("/students")
    public List<Student> getStudents(){
        return students;

    }

    @GetMapping("/csrf")
    public CsrfToken getCsrfToken(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }
    

    @PostMapping("/students")
    public Student addStudent(@RequestBody Student student){
        students.add(student);
        return student;
    }
}