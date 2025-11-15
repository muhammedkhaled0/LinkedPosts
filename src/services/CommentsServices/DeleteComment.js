import axios from "axios";

export async function DeleteCommentAPI(commentId) {
    try{
    const {data}=await axios.delete('https://linked-posts.routemisr.com/comments/'+commentId,
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
export async function CommentsAfterDeleted(postId) {
    try{
    const {data}=await axios.get('https://linked-posts.routemisr.com/posts/'+postId+'/comments',
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