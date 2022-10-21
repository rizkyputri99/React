import React, { useState, useEffect } from 'react'
import EmployeeApi from '../api/EmployeeApi'
import FormEditEmployeeApi from './FormEditEmployeeApi'
import FormEmployeeApi from './FormEmployeeApi'

export default function EmployeeViewApi() {
  const [employee, setEmployee] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    EmployeeApi.list().then(data => {
      setEmployee(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    EmployeeApi.Delete(id).then(() => {
      setRefresh(true)
      window.alert('Data Successfully Delete')
    })
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div>
      {
        displayEdit ?
          <FormEditEmployeeApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormEmployeeApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List Employee</h2>
              <button onClick={() => setDisplay(true)}>Add Employee</button>
              <table>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Hire Date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employee.map && employee.map(emp => (
                      <tr key={emp.employee_id}>
                        <td>{emp.employeeId}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phoneNumber}</td>
                        <td>{emp.hireDate}</td>
                        <td>{emp.salary}</td>
                        <td>
                          <button onClick={() => onDelete(emp.employeeId)}>Delete Employee</button>
                          <button onClick={() => onClick(emp.employeeId)}>Edit Employee</button>
                        </td>
                      </tr>
                    ))                    
                  } 
                </tbody>
              </table>
            </>
      }
    </div>
  )
  
}

