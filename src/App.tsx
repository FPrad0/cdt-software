import { useEffect, useState } from 'react'
import './App.css'
import api from './api'
import type { User } from './types'
import type { AxiosResponse } from 'axios'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const [searchText, setSearchText] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    api.get("/users").then(
      (response: AxiosResponse<User[]>) => {
        setUsers(response.data)
      }
    )
  }, [])

  useEffect(() => {
    setFilteredUsers(users.filter((user: User) => user.name.toLowerCase().includes(searchText.toLowerCase())))
  }, [searchText, users])

  return (
    <>
      <div className="menu"> Menu
        <input type="text" placeholder="Search user" onChange={(event) => setSearchText(event.target.value)} />
      </div>
      <div className="user-list">
        <h6>User List</h6>
        <div className="user-card-list">
          {filteredUsers.map((user: User) => (
            <div className="user-card" onClick={() => { setIsModalOpen(true); setSelectedUser(user) }}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))
          }
        </div>
      </div>
      {isModalOpen && selectedUser && <div className="user-modal-container" onClick={() => setIsModalOpen(false)}>
        <div className="user-modal-content">
          <div className="user-modal" onClick={(event) => event.stopPropagation()}>
            <button className="user-modal-close" onClick={() => setIsModalOpen(false)}>X</button>
            <div className="user-container-info">
              <h3>User Name:</h3>
              <p>{selectedUser.name}</p>
            </div>
            <div className="user-container-info">
              <h3>Email:</h3>
              <p>{selectedUser.email}</p>
            </div>
            <div className="user-container-info">
              <h3>Phone:</h3>
              <p>{selectedUser.phone}</p>
            </div>
            <div className="user-container-info">
              <h3>Company:</h3>
              <p>{selectedUser.company.name}</p>
            </div>
            <div className="user-container-info">
              <h3>City:</h3>
              <p>{selectedUser.address.city}</p>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default App
