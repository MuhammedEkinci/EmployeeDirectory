import React, {Component } from "react";
// import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import API from "../utils/API";



class Employee extends Component {

    //set the initial state for the arrays
    state = {
        employees: [],
        employeesFiltered: [],
        sorted: "ascend"
    };

    //Call the API to retrieve the employees 
    retrieveEmployees = async () => {
        try {
            const res = await API.getEmployees();
            const employeeInfo = res.data.results.map(emp => ({
                pic: emp.picture.thumbnail,
                first: emp.name.first,
                last: emp.name.last,
                phone: emp.phone,
                email: emp.email,
                id: emp.id.value                 
            }));
            this.setState({employees: employeeInfo, employeesFiltered: employeeInfo})
        } catch(err) {
            console.log(err);
        }
    };

    //call retrieveEmployees
    componentDidMount() {
        this.retrieveEmployees();
    }

    //this function will take the search parameters and will update the state of the employeeFiltered Array
    handleInputChange = (value) => {
        this.setState({
            employeesFiltered: this.state.employees.filter(e => e.last.includes(value))
        });
    };

    //sort By last name
    employeeSortByLastName = () => {
        console.log("run here");

        if (this.state.order === "ascend") {

            this.setState({
                employeesFiltered: this.state.employees.sort((a, b) => {
                    console.log(a.last, "a value", b.last, "b value")
                    var employeeA = a.last.toUpperCase();
                    var employeeB = b.last.toUpperCase();
                    if (employeeA < employeeB) {
                        return -1;
                    }
                    if (employeeA > employeeB) {
                        return 1;
                    }
                    return 0;
                })
            });
            return this.setState({
                sorted: "descend"
            })
        }

        this.setState({
            employeesFiltered: this.state.employees.sort((a, b) => {
                console.log(a.last, "a value", b.last, "b value")
                var employeeA = a.last.toUpperCase();
                var employeeB = b.last.toUpperCase();
                if (employeeA < employeeB) {
                    return 1;
                }
                if (employeeA > employeeB) {
                    return -1;
                }
                return 0;
            })
        });
        return this.setState({
            sorted: "ascend"
        })
    }
    render() {
        return (
            <Container>
                <div className= "mb-6">
                    <label className="mr-4" htmlFor="text" style = {{margin: "10px"}}>Search for employees:</label>
                    {/* letters typed into the input box (value) become the parameter of handleInputChange */}
                    <input type="text" onInput={event => this.handleInputChange(event.target.value)} />
                </div>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col" onClick={() => this.employeeSortByLastName()}><span className="small">Click to Sort</span><br />Last Name</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* maps the employeeFiltered array and renders it to the table */}
                        {this.state.employeesFiltered.map(empInfo=>
                        <tr key={empInfo.id}>                            
                            <td><img src={empInfo.pic} alt="employee headshot"></img></td>
                            <td>{empInfo.last}</td>
                            <td>{empInfo.first}</td>
                            <td>{empInfo.phone}</td>
                            <td>{empInfo.email}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </Container>
        );
    }

}

export default Employee;