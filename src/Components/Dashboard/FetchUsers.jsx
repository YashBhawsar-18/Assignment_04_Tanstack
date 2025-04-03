import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUsers } from './crudapi'
import DeleteUser from './DeleteUser'
import Update from './Update'
import '../css/FetchUsers.css'

const FetchUsers = () => {


  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUsers
  })
  console.log("all data", data)
  const handleDelete = (id) => {
    console.log("Id form delete", id)
  }
  return (
    <>
      <div className="fetch-users-container">
        <table className="fetch-users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Delete</th>
              <th>Updatee</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td><DeleteUser id={user.id} /></td>
                <td><Update id={user.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default FetchUsers