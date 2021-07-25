import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';

export default class AddEmployee extends Component {
    constructor(props){
        super(props)
        this.state={
            companyName:"",
            location:"",
            skill:"",
            experience:""

        }
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeSkillHandler = this.changeSkillHandler.bind(this);
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) =>{
        //console.log("helo");

        e.preventDefault();
        let employee = {companyName:this.state.companyName, location:this.state.location, skill:this.state.skill,experience:this.state.experience}
        
        console.log("emlpoyee:" +JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        })
    } 

    changeCompanyNameHandler = (event) => {
        this.setState({companyName:event.target.value});
    }

    changeLocationHandler = (event) =>{
        this.setState({location:event.target.value});
    }

    changeSkillHandler = (event) =>{
        this.setState({skill:event.target.value});
    }
    changeExperienceHandler = (event) =>{
        this.setState({experience:event.target.value});
    }
    
    cencel(){
        console.log("cencel")
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add New Job</h3>
                            
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Company Name:</label>
                                        <input placeholder="Company Name" className="form-control"
                                            value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Location:</label>
                                        <input placeholder="Location" className="form-control"
                                            value={this.state.location} onChange={this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Skills:</label>
                                        <input placeholder="Skills" className="form-control"
                                            value={this.state.skill} onChange={this.changeSkillHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Experience:</label>
                                        <input placeholder="Experience" className="form-control"
                                            value={this.state.experience} onChange={this.changeExperienceHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cencel.bind(this)} style={{marginLeft:"20px"}}>Cencel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
