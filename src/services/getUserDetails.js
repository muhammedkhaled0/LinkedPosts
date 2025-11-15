import axios from "axios";

export async function getUserDetails(){
    try{
    const {data}=await axios.get('https://linked-posts.routemisr.com/users/profile-data',
        {
        headers:{
            token:localStorage.getItem('token')   
        }
    })
    console.log(data);
    return data;
}
catch(error){
    console.log(error);
}
}