import { Mutation, useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteUser } from './crudapi';

const DeleteUser = ({id}) => {

    const queryClient = useQueryClient();

    const mutationDelete = useMutation({
        mutationFn: deleteUser,
        onSuccess:(data) => {
            queryClient.invalidateQueries(["users"]);
            console.log("delete",data);
        }
    })

    const handleDelete=()=>{

        mutationDelete.mutate(id)
    }

  return (
    <>
       <button onClick={handleDelete}>Delete</button>
    </>
  ) 
}

export default DeleteUser