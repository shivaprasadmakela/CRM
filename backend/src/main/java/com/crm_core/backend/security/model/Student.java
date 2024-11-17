package com.crm_core.backend.security.model;

public class Student {
    private int id ;
    private String name;
    private int marks;

    public Student(int id,String name, int marks){
        this.id=id;
        this.name=name;
        this.marks=marks;
    }

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMarks() {
		return this.marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

}
