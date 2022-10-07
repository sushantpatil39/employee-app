import {
    CREATE_EMPLOYEE,
    RETRIEVE_EMPLOYEES
} from '../actions/type';

const initialState = [];

const employeeReducers = (employees = initialState, action) => {
    const { type, payload } = action;

    console.log("type::" + type);
    //console.log(payload);
    switch (type) {
        case CREATE_EMPLOYEE:
            return [...employees, payload];
        case RETRIEVE_EMPLOYEES:
            return payload;
        default:
            return employees;
    }
};

export default employeeReducers;