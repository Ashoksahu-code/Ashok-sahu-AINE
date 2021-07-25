package in.ashok.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.ashok.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long>{
	

}
