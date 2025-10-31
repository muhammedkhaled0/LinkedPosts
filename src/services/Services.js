import axios from "axios";
export async function signUp(userData){
const {data}= await axios.post("https://linked-posts.routemisr.com/users/signup",userData)
return data;
}
export async function signIn(userData){
const {data}= await axios.post("https://linked-posts.routemisr.com/users/signin",userData)
return data;
}