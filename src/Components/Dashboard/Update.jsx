import React, { useState } from 'react'
import { updateUser } from './crudapi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Update = ({id}) => {
    const [name, setFName] = useState("");
    const [lastname, setLName] = useState("");
    const queryClient = useQueryClient();
    const mutationUpdate = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            console.log("User Updated")
            queryClient.invalidateQueries(["user"]);

        }
    })

    const handleFName = (e) => {
        setFName(e.target.value);
    }
    const handleLName = (e) => {
        setLName(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        mutationUpdate.mutate({id,name,lastname});

    }


  return (
    <>
        <div>
            <form action="" onSubmit={handleSubmit}>
                <br />
                <input onChange={handleFName} type="text" placeholder='fname' />
                <br />
                <input onChange={handleLName} type="text" placeholder='lname' />
                <br />
                <button>update</button>
            </form>
        </div>
    </>
  )
}

export default Update