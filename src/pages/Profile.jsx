import { useEffect, useState } from 'react'
import userImage from '../assets/cres.jpeg'
import { uploadPhotoAPI } from '../services/PorfileServices'
import { Button, Input } from '@heroui/react'
import { getUserDetails } from '../services/getUserDetails';
export default function Profile() {
  const [loading,setLoading]=useState(false);
  const [userPhoto,setUserPhoto]=useState(null)
  const [displayUserPhoto,setDisplayUserPhoto]=useState(null)
 async function setImage(){
  setLoading(true);
    let formData=new FormData()
    formData.append('photo',userPhoto)
    await uploadPhotoAPI(formData) 
    setLoading(false);
    await getPhoto();
  }
  async function getPhoto() {
    const res=await getUserDetails()
    if(res.user.photo)
    setDisplayUserPhoto(res.user.photo)
  else setDisplayUserPhoto(null)
  }
useEffect(()=>{
  getPhoto();
},[]);

  return (
    <>
    <label>
          <div className="w-40 h-40 mb-6 left-1/2 relative -translate-x-1/2 mt-6 ">
    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500">{displayUserPhoto?<img src={displayUserPhoto} className='w-40 h-40 rounded-full'/>:''} </div>
        <form className='flex justify-between' action="" onSubmit={async(e)=>{
      e.preventDefault()
      await setImage()
    }}>
    <Input id='photo' placeholder='change photo' className='me-4 hidden' type='file' onChange={(e)=>{setUserPhoto(e.target.files[0])}} accept="image/*"/>
    <Button type='submit' color='primary' className='mt-4 ms-3' disabled={loading} isLoading={loading}>Confirm Change</Button>
    </form>

    </div>
    </label>

    </>
  )
}