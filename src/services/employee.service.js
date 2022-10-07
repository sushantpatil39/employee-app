import http from '../http-common';

// const EmployeeService = () => {
//    const getAll = () => {
//     console.log("in http common");
//         return http.get("/EmployeeDetails");
//     }

//     const Create = () => {
//         return http.post("/employees");
//     }
// }

// const getEmployee = () => {
//     console.log("in http common");
//     return http.get("/EmployeeDetails");
// }

export async function getEmployee() {
    console.log("In service");
    const response = await http.get("/EmployeeDetails");
    
    return response;
}

export async function addEmployeeDetails (data) {
    if(data === undefined) {
        return;
    }
    const strigifyData = JSON.stringify(data);
    console.log("addEmployeeDetails");
    console.log(strigifyData);
    const response = await http.post("/EmployeeDetails", strigifyData);
    console.log("in service");
    return response;
}
         

export default getEmployee;