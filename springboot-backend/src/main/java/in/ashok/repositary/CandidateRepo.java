package in.ashok.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import in.ashok.model.Candidate;


public interface CandidateRepo extends JpaRepository<Candidate, Long>{

}
