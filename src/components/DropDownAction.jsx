import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Spinner } from '@heroui/react';
import { DeleteCommentAPI } from '../services/CommentsServices/DeleteComment';
export default function DropDownAction({commentId,getUpdatedComments,setIsUpdating,isUpdating}) {
  const [loading,setLoading]=useState(false);
   async function deleteComment(commentId){
    setLoading(true);
   const res=await DeleteCommentAPI(commentId);
   await getUpdatedComments();
    setLoading(false);
    }
  return (
    <>

    {loading?<Spinner/>:<Dropdown>
      <DropdownTrigger>
        <div className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg></div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit" color='primary' onClick={()=>{setIsUpdating(!isUpdating)}}>Edit</DropdownItem>
        <DropdownItem key="delete" className="text-danger" onClick={()=>{deleteComment(commentId)}} color="danger">
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>}

    </>
  )
}
