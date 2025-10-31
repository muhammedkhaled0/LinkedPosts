import React, { useState } from 'react'
import userImage from '../assets/placeholder_image.png'
import { Link } from 'react-router-dom'
import SubmitComment from './SubmitComment';
export default function PostCard({post,numberOfComments,getPosts}) {
  console.log(numberOfComments);
  const {user,createdAt,body,image,comments,id}=post
  const {name,photo}=user
  const [updatedComments,setUpdatedComments]=useState(comments);
  return (
    <>
               <div className="lg:w-4/6 md:w-5/6 mx-auto">
  <div className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
    <div className="w-full h-16 flex items-center justify-between ">
      <div className="flex">
        <img className=" rounded-full w-10 h-10 mr-3" src={photo} alt={name}/>
        <div>    
          <h3 className="text-md font-semibold ">{name}</h3>
          <p className="text-xs text-gray-500">{createdAt.split('.',1).join().replace('T',' ')}</p>
        </div>
      </div>
      <svg className="w-16" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
    </div>
    {body&&<p>{body}</p>}
    {image&& <img src={image} alt={body} className='w-full h-3/4 object-cover'/>}
    <div className="w-full h-8 flex items-center px-3 my-3">
      <div className="bg-blue-500 z-10 w-5 h-5 rounded-full flex items-center justify-center ">
        <svg className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
      </div>
      <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center -ml-1">
        <svg className="w-3 h-3 fill-current stroke-current text-white" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
      </div>
      <div className="w-full flex justify-between">
        <p className="ml-3 text-gray-500">{Math.ceil(Math.random()*500)}</p>
        <p className="ml-3 text-gray-500"><Link to={'/post-details/'+id}>{updatedComments.length} comment</Link></p>
      </div>
    </div>
    <SubmitComment postId={id} setUpdatedComments={setUpdatedComments}/>
    <div className="grid grid-cols-3 w-full px-5  my-3 border-t border-divider p-4">
      <button className="flex flex-row justify-center items-center w-full space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#838383" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
        <span className="font-semibold text-lg text-gray-600">Like</span></button>
      <button className="flex flex-row justify-center items-center w-full space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#838383" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        <span className="font-semibold text-lg text-gray-600">Comment</span></button>
      <button className="flex flex-row justify-center items-center w-full space-x-3"><svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#838383" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
        <span className="font-semibold text-lg text-gray-600">Share</span></button>
    </div>
{updatedComments.length > 0 && (
  <div className="bg-gray-100 w-full py-2 rounded-md mt-2">
    {updatedComments.slice(0, numberOfComments).map((comment, index) => (
      <div
        key={index}
        className="w-full flex items-start justify-between px-3 py-2 border-b border-gray-200 last:border-none"
      >
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
      </div>
    ))}
  </div>
)}

  </div>
</div>
    </>
  )
}
