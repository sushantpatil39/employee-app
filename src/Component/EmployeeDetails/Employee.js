import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { retrieveEmployee } from "../../actions/employee";

import EmployeeDOB from './EmployeeDOB';
import Card from '../UI/Card';
//import { getEmployee } from '../../services/employee.service'

import './Employee.css';

const Employee = (props) => {

    const [employees, setEmployees] = useState([]);

    const store1 = useSelector((state) => state)
    const varDis =  useDispatch();
    console.log(store1);

    useEffect(() => {
        (async () => {
            console.log("Employee component::" + "");
            let res = await getEmployeeDetails();
            //console.log(res.data);
            if (res.status === 200) {
                setEmployees(res.data);
            }
        })();
    }, []);

    const getEmployeeDetails = async () => {
        //await distpatch; 
        //retrieveEmployee
        const res = varDis(retrieveEmployee());
        //var res = retrieveEmployee();
       // console.log("res::::" + res);
        return res;
    }

    return(
        <Card className="employee">
            {employees.map(employee => (
                    <div key={employee.id} className="employee-item">
                        <EmployeeDOB date={employee.dob} />
                        <p className="employee-name">Name : {employee.firstname + " " + employee.lastname}</p>
                        <p className="employee-name">Department: {employee.department}</p>
                        <p className="employee-name">City: {employee.city}</p>
                    </div>
                ))}
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
      employees: state.employees,
    };
  };

//export default connect(mapStateToProps,{retrieveEmployee}) (Employee);
export default Employee;