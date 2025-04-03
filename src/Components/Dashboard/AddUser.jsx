import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { addUser } from './crudapi';
import '../css/AddUser.css'

const AddUser = () => {
    const [name, setFName] = useState("");
    const [lastname, setLName] = useState("");
    const queryClient = useQueryClient();
    const mutationAdd = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            console.log("User Added")
            queryClient.invalidateQueries(["user"]);

        }
    })

    const handleFName = (e) => {
        setFName(e.target.value);
    }
    const handleLName = (e) => {
        setLName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        mutationAdd.mutate({ name, lastname });

    }

    return (
        <>
            <div className="add-user-container">
                <form className="add-user-form" onSubmit={handleSubmit}>
                    <input onChange={handleFName} type="text" placeholder="First Name" />
                    <input onChange={handleLName} type="text" placeholder="Last Name" />
                    <button type="submit">Add</button>
                </form>
            </div>

        </>
    )
}

export default AddUser