import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService';

export default class UpdateEmployee extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            firstName:"",
            lastName:"",
            emailId:""

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.saveEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let emlpoyee=res.data;
            this.setState({firstName:emlpoyee.firstName,
                           lastName:emlpoyee.lastName,
                           emailId:emlpoyee.emailId
            });
        })
    }

    updateEmployee = (e) =>{
        console.log("helo");

        e.preventDefault();
        let employee = {firstName:this.state.firstName, lastName:this.state.lastName, emailId:this.state.emailId}
        
        console.log("emlpoyee:" +JSON.stringify(employee));

        
        
    } 

    changeFirstNameHandler = (event) => {
        this.setState({firstName:event.target.value});
    }

    changeLastNameHandler = (event) =>{
        this.setState({lastName:event.target.value});
    }

    changeEmailIdHandler = (event) =>{
        this.setState({emailId:event.target.value});
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
                            <h3 className="text-center">Add Employees</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
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
