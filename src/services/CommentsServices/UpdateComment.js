import axios from "axios";

export async function UpdateCommentAPI(commentId,content) {
    try{
    const {data}=await axios.put('https://linked-posts.routemisr.com/comments/'+commentId,
       { content:content},
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