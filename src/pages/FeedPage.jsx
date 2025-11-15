import React, { useEffect, useState } from 'react'
import { Button } from '@heroui/react'
import PostCard from '../components/PostCard'
import { GetAllPosts} from '../services/PostServices'
import LoadingScreen from '../components/LoadingScreen';
import CreatePost from '../components/CreatePost';
import {useQuery } from '@tanstack/react-query';
export default function FeedPage() {
const [posts,setPosts]=useState([]);
const {data:postat,isFetching,isLoading,isError,refetch/* دي شايلة الميثود اللي بتكلم api=>GetAllPosts*/}=useQuery({
  queryKey:['posts'],
  queryFn:GetAllPosts,
  select:(data)=>data.data.posts
})

  return (
    <>
    <CreatePost callBack={refetch}/>
    {isLoading?  <div className='flex flex-col gap-y-7'>
<LoadingScreen/>
<LoadingScreen/>
    </div>
:    <div>
      {postat?.map((post)=>{return <PostCard key={post.id} post={post} numberOfComments={1}/>})}
    </div>}

    </>
  )
}
