import {
    CREATE_EMPLOYEE,
    RETRIEVE_EMPLOYEES
} from './type';
import { useDispatch } from "react-redux";

import EmployeeService from '../services/employee.service';

export const retrieveEmployee = ()  => {

    //const varDispatch = useDispatch()

    try{
        const response = EmployeeService.getEmployee();

        console.log("response::" + response);
        return ({
            type: RETRIEVE_EMPLOYEES,
            payload: response,
        });
    } catch (err) {
        console.log(err);
    }
};

export const createEmployee = (data) => async(dispatch) => {
    try{
        const response = await EmployeeService.createEmployee(data);

        dispatch({
            type: CREATE_EMPLOYEE,
            payload: response.data,
        });

        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};