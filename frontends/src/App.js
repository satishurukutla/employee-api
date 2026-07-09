import { useEffect, useState } from "react";

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Employees</h1>

      {employees.map(emp => (
        <p key={emp.id}>{emp.name}</p>
      ))}
    </div>
  );
}

export default App;
