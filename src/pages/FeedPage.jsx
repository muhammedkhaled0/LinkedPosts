import React, { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import PostCard from '../components/PostCard'
import { GetAllPosts} from '../services/PostServices'
import LoadingScreen from '../components/LoadingScreen';
export default function FeedPage() {
const [posts,setPosts]=useState([]);
 async function getPosts(){
  const data= await GetAllPosts();
  setPosts(data.posts);
}
  useEffect(()=>{
     getPosts();
    
  },[])
  return (
    <>
    {posts.length!=50?  
<LoadingScreen/>
:    <div>
      {posts.map((post)=>{return <PostCard key={post.id} post={post} numberOfComments={1}/>})}
    </div>}

    </>
  )
}
