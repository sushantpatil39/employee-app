import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { createEmployee } from "../../actions/employee";
//import { addEmployeeDetails } from '../../services/employee.service';

import './EmployeeForm.css';

const EmployeeForm = (props) => {

    const[enteredFirstname, setEnteredFirstname] = useState('');
    const[enteredLastname, setEnteredLastname] = useState('');
    const[enteredGender, setEnteredGender] = useState('');
    const[enteredDob, setEnteredDob] = useState('');
    const[enteredDepartment, setEnteredDepartment] = useState('');
    const [op_response, setOp_response] = useState([]);

    const lastnameChangedHandler = (event) => {
        setEnteredLastname(event.target.value);
    };

    const firstnameChangedHandler = (event) => {
        setEnteredFirstname(event.target.value);
    };

    const genderChangedHandler = (event) => {
        setEnteredGender(event.target.value);
    };

    const dobChangedHandler = (event) => {
        setEnteredDob(event.target.value);
    };

    const departmentChangedHandler = (event) => {
        setEnteredDepartment(event.target.value);
    };

    const onSubmitdHandler = (event) => {
        event.preventDefault();

        const employeeData = {
            Firstname: enteredFirstname,
            Lastname: enteredLastname,
            Department: enteredDepartment,
            Dob: enteredDob,
            Gender: enteredGender
        }
      

        //const xyyz = this.adddata(employeeData);

        const res = createEmployee(employeeData);
        console.log(res);
        if (res.status === 200) {
            console.log("success");
            setOp_response("Data inserted successfully.");
        }

        //let res =  addEmployeeDetails(employeeData);
        
  
        
        // if (res.status === 200) {
        //     console.log("success");
        //     setOp_response("Data inserted successfully.");
        // }
    }

    // const adddata = (employeeData) =>  (async () => {

    //     console.log("in add data");
    //     console.log(employeeData);
    //     const res = await addEmployeeDetails(employeeData);
    //     console.log(res);
    //     if (res.status === 200) {
    //         console.log("success");
    //         setOp_response("Data inserted successfully.");
    //     }
    // });

    // useEffect(() => {
    //     (async () => {
    //         let res = await addEmployeeDetails();
    //         if (res.status === 200) {
    //             setOp_response("Data inserted successfully.");
    //         }
    //     })();
    // }, []);


    return(
        <form onSubmit={onSubmitdHandler}>
            <div className='new-employee__controls'>
                <div className='new-employee__control'>
                    <label>First Name</label>
                    <input id="firstname" type='text' value={enteredFirstname} onChange={firstnameChangedHandler}/>
                </div>
                <div className='new-employee__control'>
                    <label>Last Name</label>
                    <input id="lastname" type='text' value={enteredLastname} onChange={lastnameChangedHandler}/>
                </div>
                <div className='new-employee__control'>
                    <label>Department</label>
                    <input id="department" type='text' value={enteredDepartment} onChange={departmentChangedHandler}/>
                </div>
                <div className='new-employee__control'>
                    <label>Gender</label>
                    <input id="gender" type='text' value={enteredGender} onChange={genderChangedHandler}/>
                </div>
                <div className='new-employee__control'>
                    <label>Date Of Birth</label>
                    <input type='date' min='1971-01-01' max='2022-12-12' value={enteredDob} onChange={dobChangedHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="cancel" onClick={props.onCancel} >Cancel</button>
                <button type="submit">Add Employee</button>
            </div>
        </form>
    );
}

export default connect(null, { createEmployee })( EmployeeForm); 