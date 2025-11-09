import axios from "axios";

export async function GetAllPosts(){
    try{
    const {data}=await axios.get('https://linked-posts.routemisr.com/posts?limit=50',{
        headers:{
            token:localStorage.getItem('token')   
        },params:{
            sort:'-createdAt'
        }
    })
    return data;
}
catch(error){
    console.log(error);
}
}
export async function GetSinglePost(id){
    try{
    const {data:{post}}=await axios.get('https://linked-posts.routemisr.com/posts/'+id,{
        headers:{
            token:localStorage.getItem('token')   
        }
    })
    return post;
}
catch(error){
    console.log(error);
    return error
}
}
export async function CreatePostAPI(formData){
    try{
    const {data}=await axios.post('https://linked-posts.routemisr.com/posts',
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