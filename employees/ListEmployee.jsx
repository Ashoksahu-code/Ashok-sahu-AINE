import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'
import CandidateService from '../Service/CandidateService'

import  {Modal, ModalBody} from 'react-bootstrap';


export default class ListEmployee extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[],
            show:false,

            fullName:"",
            position:"",
            skill:"",
            passingYear:"",
            experience:""
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeSkillHandler = this.changeSkillHandler.bind(this);
        this.changePassingYearHandler = this.changePassingYearHandler.bind(this);
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data});

        });
    }

    addEmployee(){
        this.props.history.push('add-employees');
    }

    //Modal-function
    handleModal(){
        this.setState({show:true});
    }

    saveEmployee = (e) =>{
        //console.log("helo"); 

        e.preventDefault();
        let employee = {fullName:this.state.fullName, position:this.state.position, skill:this.state.skill,passingYear:this.state.passingYear,experience:this.state.experience}
        
        console.log("emlpoyee:" +JSON.stringify(employee));

        CandidateService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        })
    } 
    changeFullNameHandler = (event) => {
        this.setState({fullName:event.target.value});
    }
    changePositionHandler = (event) => {
        this.setState({position:event.target.value});
    }
    changeSkillHandler = (event) => {
        this.setState({skill:event.target.value});
    }
    changePassingYearHandler = (event) => {
        this.setState({passingYear:event.target.value});
    }
    changeExperienceHandler = (event) => {
        this.setState({experience:event.target.value});
    }

    render() {
        return (
            <div>
                <h2 className="text-center">New Job List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table_striped table-bordered">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Location</th>
                                <th>Skills</th>
                                <th>Experience</th>
                                <th>Action</th>

                            </tr>                     
                        </thead>
                        <tbody>
                              {
                                this.state.employees.map(
                                    employee=>
                                    <tr key ={employee.id}>
                                        <td><h5>{employee.companyName}</h5></td>
                                        <td>{employee.location}</td>
                                        <td>{employee.skill}</td>
                                        <td>{employee.experience}</td>

                                        <td>
                                            <button onClick={()=>{this.handleModal()}} className="btn btn-info">Apply</button>
                                            <Modal show={this.state.show}>
                                                <h2 className="text-center">Apply For This Job</h2>
                                                <Modal.Body>
                                                    <form>
                                                        <div className="form-group">
                                                            <label>Full Name:</label>
                                                            <input placeholder="Full Name" className="form-control"
                                                             value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Position:</label>
                                                            <input placeholder="Position" className="form-control"
                                                             value={this.state.position} onChange={this.changePositionHandler}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Skills:</label>
                                                            <input placeholder="Skills" className="form-control"
                                                             value={this.state.skill} onChange={this.changeSkillHandler}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Pass out year:</label>
                                                            <input placeholder="Pass out Year" className="form-control"
                                                             value={this.state.passingYear} onChange={this.changePassingYearHandler}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Experience:</label>
                                                            <input placeholder="Experience" className="form-control"
                                                             value={this.state.experience} onChange={this.changeExperienceHandler}/>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-info" onClick={this.saveEmployee}>Apply</button>
                                                        </div>
                                                        
                                                    </form>
                                                </Modal.Body>
                                            </Modal>
                                        </td>
                                    </tr>
                                )

                              }
                        </tbody>
                    </table>
                
                </div>
                
            </div>
        )
    }
}
