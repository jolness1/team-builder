import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import EmployForm from "./EmployForm.js";
import Employee from "./Employee.js";
import axios from "./axios"; 


const initialFormValues ={
  name: "",
  email: "",
  role: "",
}
function App() {
  const [employees, setEmployees] = useState([]);
  const [formValues, setFormValue] = useState(initialFormValues);  

  const updateForm = (inputName, inputValue) => {
    setFormValue({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newEmployee = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newEmployee.name || !newEmployee.email || !newEmployee.role) return;

    axios
    .post("fakeapi.com", newEmployee)
    .then((res) => {
      setEmployees([newEmployee, ...employees]);
      setFormValue(initialFormValues);
    })
    .catch((err) => {
      console.log(err, "YOUR FUKT -Kevin Gifford");
    });

};

useEffect(() => {
  axios.get("fakeapi.com").then((res) => setEmployees(res.data));
}, []);
  
  
    return(
    <div className="container">
      <h1> Team Builder Forms</h1>
      <EmployForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {employees.map((employee) =>{
        return <Employee key={employee.id} details={employee} />;
       })}


      

    </div>
    
  )
}

  export default App;