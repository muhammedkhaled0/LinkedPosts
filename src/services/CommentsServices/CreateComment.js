import axios from "axios";
import { s } from "framer-motion/client";

export async function CreateComment(commentContent,postId) {
    try{
    const {data}=await axios.post('https://linked-posts.routemisr.com/comments',{
            content:commentContent,
            post:postId
    },
    {
        headers:{
            token:localStorage.getItem('token')
        }
    }
)
return data;
}
catch(error){
    console.log(error);
    
}
}