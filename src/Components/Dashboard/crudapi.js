import axios from "axios";



const api = axios.create({
    baseURL: "https://67eb8081aa794fb3222a74bd.mockapi.io/users",
    
})



// api.interceptors.request.use((request) => {
//     console.log("request",request)
//     const token = localStorage.getItem("token");
//     if(token){
//         request.headers["Authorization"] = `Bearer${token}`;
//     }
//     return request;
//     (e) => {
//         return Promise.reject(e)
//     }
// })

export const fetchUsers = async()=>{

        try{
            const res = await api.get("/users");
            // console.log(res.data)
            return res.data;
        } catch(e){
            console.log("Fetchuser error: ",e)
        }
}

export const addUser = async({name,lastname}) => {
        const res =await api.post("/users", {name, lastname}
            //,
            //{
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("token")}`
        //     }
        // }
    );
    console.log("first",res.data)
    return res.data;  
}

export const deleteUser = async(id) => {
    console.log("idd print",id)
    const res =await api.delete(`/users/${id}`);
    return res.data;
}

export const updateUser = async({id, name, lastname}) => {
    const res = await api.put(`/users/${id}`,{name, lastname});
    console.log("updating on This Id: ", id, name, lastname);
    return res.data;
}
