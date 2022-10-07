import React, {useState} from 'react';

import EmployeeForm from './EmployeeForm';

import './NewEmployee.css'

const NewEmployee = () => {
    const[isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(true);
    }

    return (
        <div className='new-employee'>
            {
                !isEditing && <button onClick={startEditingHandler}> Add New Employee</button>
            }
            {
                isEditing && (<EmployeeForm onCancel={stopEditingHandler} />)
            }
        </div>
    );
}

export default NewEmployee;