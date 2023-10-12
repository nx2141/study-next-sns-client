import axios from "axios";

const apiClient = axios.create({
    // baseURL:"http://localhost:5000/api",
    baseURL:process.env.NEXT_PUBLIC_API_BASEURL,
    headers:{
        "Content-type":"application/json",
        // "Authorization":`Beare{token}`
    },
});

export default apiClient;