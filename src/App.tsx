import { useEffect, useState } from 'react'
import './assets/css/App.css'
import api from './api'
import type { User } from './types'
import type { AxiosResponse } from 'axios'
import { UserModal } from './components/UserModal'
import { UserList } from './components/UserList'
import { Header } from './components/Header'

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

  function handleUserCardClick(user: User) {
    setIsModalOpen(true);
    setSelectedUser(user);
  }

  function handleUserModalClose() {
    setIsModalOpen(false);
    setSelectedUser(null);
  }

  function handleSearchTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <Header onSearchTextChange={handleSearchTextChange} />
      <UserList users={filteredUsers} onCardClick={handleUserCardClick} />
      {isModalOpen && selectedUser &&
        <UserModal user={selectedUser} onClose={handleUserModalClose} />
      }
    </>
  )
}

export default App
