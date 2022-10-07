import './EmployeeDOB.css';

const EmployeeDOB = (props) => {
    var dob = new Date(props.date);
    const month = dob.toLocaleString('en-US', {month: 'long'});
    const day = dob.toLocaleString('en-US', {day: '2-digit'});
    const year = new Date(props.date).getFullYear();

    return (
        <div className="employee-date">
            <div className="employee-date__month">{month}</div>
            <div className="employee-date__year">{year}</div>
            <div className="employee-date__day">{day}</div>
        </div>
    )
 }

 export default EmployeeDOB;