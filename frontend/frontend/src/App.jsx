import { useState } from 'react'
import './App.css'
import Admin from './Pages/Admin'
import Employee from './Pages/Employee'
import LogIn from './Pages/LogIn'
import Registration from './Pages/Registration'

function App() {

  const [view, setView] = useState('registration');
  const [user, setUser] = useState(null);

  const handleLogin = async ({ email, password }) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
    } else {
      const response = await fetch('http://localhost:3001/employees/login');
      const employees = await response.json();
      const foundUser = employees.find(emp => emp.email === email && emp.password === password);
      if (foundUser) {
        setUser('employee');
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {view === 'registration' ? (
          <Registration setView={setView} />
      ) : (
          <LogIn setView={setView} handleLogin={handleLogin} />
      )}
      {user === 'admin' ? (
          <Admin />
      ) : user === 'employee' ? (
          <Employee />
      ) : null}
      {/* {user === 'admin' ? <Admin /> : user === 'employee' ? <Employee /> : null} */}
    </>
  )
}

export default App
