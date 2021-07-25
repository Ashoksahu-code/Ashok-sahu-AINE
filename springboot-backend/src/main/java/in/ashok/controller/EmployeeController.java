package in.ashok.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ashok.exception.ResourceNotFoundException;
import in.ashok.model.Candidate;
import in.ashok.model.Employee;
import in.ashok.repositary.CandidateRepo;
import in.ashok.repositary.EmployeeRepo;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepo er; 
	
	@Autowired
	private CandidateRepo cr;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return er.findAll();
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return er.save(employee);
	}
	
	//Candidate Controller
	@GetMapping("/candidate")
	public List<Candidate> getAllCandidate(){
		return cr.findAll();
	}
	
	@PostMapping("/candidate")
	public Candidate createCandidate(@RequestBody Candidate candidate) {
		return cr.save(candidate);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		  Employee employee = er.findById(id)
				  .orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:" +id));
		  return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetail){
		Employee employee = er.findById(id)
				  .orElseThrow(()->new ResourceNotFoundException("Employee not exist with id:" +id));
		employee.setCompanyName(employeeDetail.getCompanyName());
		employee.setLocation(employeeDetail.getLocation());
		employee.setSkill(employeeDetail.getSkill());
		employee.setExperience(employeeDetail.getExperience());
		
		Employee updatedEmployee = er.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

}
