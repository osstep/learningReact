import React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext)
  const [newName, setNewName] = useState('')
  return (
    <>
      <button onClick={() => setUser(user === 'Stepan' ? 'Alice' : 'Stepan')}>
        change
      </button>
      <input onChange={(e) => setNewName(e.target.value)}></input>
      <button onClick={() => setUser(newName)}>post new name</button>
    </>
  )
}

export default ChangeUser
