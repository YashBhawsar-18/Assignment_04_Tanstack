import axios from "axios";


const api = axios.create({
    baseURL : "https://dummyjson.com"
})

const loginUser = async(username, password) => {
    
    try{
        const response =  await api.post("/auth/login", username, password);
        return response.data;
    }catch(e){
        console.log("Error",e);
    }
    
}

export default loginUser;