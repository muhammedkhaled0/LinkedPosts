import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetSinglePost } from '../services/PostServices';
import PostCard from '../components/PostCard';
import LoadingScreen from '../components/LoadingScreen';
export default function PostDetails() {
  const [post,setPost]=useState(null);
  const {id}=useParams();
  async function getPost(){
    const post= await GetSinglePost(id);
    setPost(post);
    console.log(post);
  }
  useEffect(()=>{getPost()},[])
  return (

    <div>
      {post?<div> <PostCard post={post} numberOfComments={post.comments.length} getPosts={getPost}/></div>:<div className='flex flex-col gap-y-7'>
      <LoadingScreen/>
      <LoadingScreen/>
          </div>
}
    </div>
  )
}
