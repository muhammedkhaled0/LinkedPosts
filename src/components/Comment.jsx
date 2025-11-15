import React, { useContext, useEffect, useState } from 'react'
import userImage from '../assets/placeholder_image.png'
import { Link } from 'react-router-dom'
import SubmitComment from './SubmitComment';
import { AuthContext } from '../AuthContext';
import DropDownAction from './DropDownAction';
import { CommentsAfterDeleted } from '../services/CommentsServices/DeleteComment';
import { Button, Input } from '@heroui/react';
import { UpdateCommentAPI } from '../services/CommentsServices/UpdateComment';
export default function Comment({post,comment,index,getUpdatedComments}) {
  const [valueOfUpdatedComment,setValueOfUpdatedComment]=useState(comment.content)
  const [isUpdating,setIsUpdating]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    const {userData}=useContext(AuthContext);
   async function handleUpdatigComments(){
    setIsLoading(true)
    const res=await UpdateCommentAPI(comment._id,valueOfUpdatedComment)
    console.log(comment._id);
    console.log(res);
    await getUpdatedComments();
    setIsLoading(false)
    }
useEffect(() => {
  setValueOfUpdatedComment(comment.content);
}, [comment.content]);
  return (
         <>
         <div key={index} className="w-full px-3 py-2 border-b border-gray-200 last:border-none" >
         <div  className=" flex justify-between" >
           <div className="flex">
             <img
               onError={(e) => (e.target.src = userImage)}
               className="rounded-full w-10 h-10 mr-3"
               src={comment.commentCreator?.photo}
               alt={comment.commentCreator?.name}
             />
             <div>
               <h3 className="text-md font-semibold">
                 {comment.commentCreator?.name}
               </h3>
               <p className="text-xs text-gray-500 mb-1">
                 {comment.createdAt
                   ?.split('.', 1)
                   .join()
                   .replace('T', ' ') || ''}
               </p>
               <p className="text-sm text-gray-800">{comment.content}</p>
             </div>
           </div>
           {comment.commentCreator._id===userData._id&&userData._id===post.user._id?<div>
             <DropDownAction commentId={comment._id}  getUpdatedComments={getUpdatedComments} setIsUpdating={setIsUpdating} isUpdating={isUpdating}/>
             </div> 
   :''}
         </div>
         
             {isUpdating && (
               <form onSubmit={(e) => { e.preventDefault();handleUpdatigComments();}} className="w-full mt-3">
                 <div className="border border-gray-200 rounded-xl p-3 bg-gray-50">
                   <div className="flex gap-3 items-center">
                     <Input
                       fullWidth
                       variant="bordered"
                       value={valueOfUpdatedComment}
                       onChange={(e) => setValueOfUpdatedComment(e.target.value)}
                       placeholder="Edit your comment..."
                     />
             
                     <Button
                       color="primary"
                       type="submit"
                       isLoading={isLoading}
                       disabled={isLoading}
                       className="whitespace-nowrap"
                     >
                       Update
                     </Button>
                   </div>
                 </div>
               </form>
             )}
         </div>
         </>
  )
}
