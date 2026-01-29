import { useEffect, useState } from 'react'
import './App.css'
import api from './api'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.get("/users").then(
      (response) => {
        setUsers(response.data)
      }
    )
  }, [])

  return (
    <>
      <div className="menu"> Menu
        <input type="text" placeholder="Search user" />
      </div>
      <div className="user-list">
        <h6>User List</h6>
        <div className="user-card-list">
          {users.map((user) => (
            <div className="user-card">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))
          }
        </div>
      </div>
      {/* <div className="user-modal-container">
        <div className="user-modal-content">
          <div className="user-modal">
            <button className="user-modal-close">X</button>
            <div className="user-container-info">
              <h3>User Name:</h3>
              <p>Leticia</p>
            </div>
            <div className="user-container-info">
              <h3>Email:</h3>
              <p>leticia@gmail.com</p>
            </div>
            <div className="user-container-info">
              <h3>Phone:</h3>
              <p>(11) 99999-9999</p>
            </div>
            <div className="user-container-info">
              <h3>Company:</h3>
              <p>Company Name</p>
            </div>
            <div className="user-container-info">
              <h3>City:</h3>
              <p>São Paulo</p>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default App
