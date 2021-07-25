package in.ashok.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CandidateTable")
public class Candidate {
     
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@Column(name="fullName")
	private String fullName;
	
	@Column(name="position")
	private String position;
	
	@Column(name="skill")
	private String skill;
	
	@Column(name="passingYear")
	private String passingYear;
	
	@Column(name="experience")
	private String experience;
	
	public Candidate(String fullName, String position, String skill, String passingYear, String experience) {
		super();
		this.fullName = fullName;
		this.position = position;
		this.skill = skill;
		this.passingYear = passingYear;
		this.experience = experience;
	}
	
	
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	public String getPassingYear() {
		return passingYear;
	}
	public void setPassingYear(String passingYear) {
		this.passingYear = passingYear;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	
}
