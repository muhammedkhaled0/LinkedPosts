import { Button, Input, Spinner } from '@heroui/react'
import React, { useState } from 'react'
import { CreatePostAPI } from '../services/PostServices';
export default function CreatePost({callBack}) {
    const [postBody,setPostBody]=useState('');
    const [postImage,setPostImage]=useState(null);
    const [imageURL,setImageURL]=useState('');
    const [loading,setLoading]=useState(false);
    function handleImage(e){
        setPostImage(e.target.files[0])
        setImageURL(URL.createObjectURL(e.target.files[0]));
        e.target.value=null;
    }
   async function createPostFunc(e){
    setLoading(true);
      e.preventDefault();
      const formData=new FormData();
      if(postBody){
      formData.append('body',postBody);
      }
      if(postImage){
      formData.append('image',postImage);
      }
      const response= await CreatePostAPI(formData);
      await callBack();
    setLoading(false);
    setPostImage(null);
    setImageURL('');
    setPostBody('')
    }
    return (
    <>
      <div className='bg-white rounded-md shadow-md h-auto py-3 px-3 my-5 relative dark:bg-black'>
        <form action="" onSubmit={createPostFunc}>
            <textarea name="" id="" className='border w-full p-4 rounded-md resize-none' rows={4} value={postBody} onChange={(e)=>{setPostBody(e.target.value)}} placeholder='create your post'></textarea>
            {imageURL!=''&&<div className='relative'>
            <img src={imageURL} className='w-full'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 absolute top-2 end-2 cursor-pointer dark:text-white" onClick={()=>{setImageURL('')}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
            </div>}

            <div className='flex flex-wrap justify-between mt-4'>
           <label className='cursor-pointer'>
            <Input className='hidden' type='file' onChange={handleImage}/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
            </label>
            <Button type='submit' className='block' color='primary'>Post</Button>
            </div>
        </form>
        {loading && <div className='absolute inset-0 w-full rounded-md bg-gray-300/50 flex justify-center items-center'>
        <Spinner/>
        </div>}
      </div>
    </>
  )
}
