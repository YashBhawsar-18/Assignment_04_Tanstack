import React, { useState } from 'react'
import { updateUser } from './crudapi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Update.css'

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [name, setFName] = useState("");
    const [lastname, setLName] = useState("");
    const queryClient = useQueryClient();
    const mutationUpdate = useMutation({
        mutationFn: updateUser,
        onSuccess: () => {
            console.log("User Updated")
            queryClient.invalidateQueries(["user"]);
            navigate('/dashboard')

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
        console.log(" hanlde submit id", id)
        mutationUpdate.mutate({ id, name, lastname });

    }


    return (
        <>
            <div className="update-container">
                <form onSubmit={handleSubmit}>
                    <br />
                    <input onChange={handleFName} type="text" placeholder="fname" />
                    <br />
                    <input onChange={handleLName} type="text" placeholder="lname" />
                    <br />
                    <button>Save</button>
                </form>
            </div>
        </>
    )
}

export default Update