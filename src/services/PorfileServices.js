import axios from "axios";

export async function uploadPhotoAPI(formData){
    try{
    const {data}=await axios.put('https://linked-posts.routemisr.com/users/upload-photo',
        formData
    ,{
        headers:{
            token:localStorage.getItem('token')   
        }
    })
    return data;
}
catch(error){
    console.log(error);
}
}