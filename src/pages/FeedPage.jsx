import React, { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import PostCard from '../components/PostCard'
import { GetAllPosts} from '../services/PostServices'
import LoadingScreen from '../components/LoadingScreen';
import CreatePost from '../components/CreatePost';
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
    <CreatePost callBack={getPosts}/>
    {posts.length!=50?  <div className='flex flex-col gap-y-7'>
<LoadingScreen/>
<LoadingScreen/>
    </div>
:    <div>
      {posts.map((post)=>{return <PostCard key={post.id} post={post} numberOfComments={1}/>})}
    </div>}

    </>
  )
}
