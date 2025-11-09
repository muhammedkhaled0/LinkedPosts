import React, { useState } from 'react'
import { Input, Textarea, Button, form } from '@heroui/react'
import { CreateComment } from '../services/CommentsServices/CreateComment';
import { useParams } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
export default function SubmitComment({postId,setUpdatedComments}) {
  const [commentContent,setCommentContent]=useState('');
 async function CallComment(e){
     e.preventDefault();
    const res=await CreateComment(commentContent,postId);
    console.log(res);
    setUpdatedComments(res.comments)
     setCommentContent('');
  }
  return (
    <>
    <form onSubmit={(e)=>{CallComment(e)}}>
<div className=" mx-auto p-4">
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 grid gap-3">
<label htmlFor="comment" className="sr-only">
 Add
</label>
<Input id="comment" placeholder=" Comment..." className="resize-none" value={commentContent} onChange={(e)=>{setCommentContent(e.target.value)}} />
<div className="flex items-center justify-end">
<Button type='submit' className="rounded-xl px-6 py-2 bg-primary text-white" disabled={commentContent.length<3} >
Comment
</Button>
</div>
</div>
</div>
</form>
</>
)
}
