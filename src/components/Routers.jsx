import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import FeedPage from '../pages/FeedPage';
import Profile from '../pages/Profile';
import PostDetails from '../pages/PostDetails';
import NotFound from '../pages/NotFound';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import AuthProtectedRoute from './AuthProtectedRoute';
export const routers=createBrowserRouter([
  {
    path:'',element:<MainLayout/>,children:[
      {
        index:true,
        element:<ProtectedRoute>
        <FeedPage/>
        </ProtectedRoute>
      },
      {
        path:'profile',
        element:<ProtectedRoute>
            <Profile/>
        </ProtectedRoute>
      },
      {
        path:'post-details/:id',
        element:<ProtectedRoute>
              <PostDetails/>
        </ProtectedRoute>
      },
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  },
  {
    path:'',
    element:<AuthProtectedRoute>
    <AuthLayout/>
    </AuthProtectedRoute>
    ,children:[
      {
          path:'login',
         element: <AuthProtectedRoute>
        <Login/>
        </AuthProtectedRoute>
      },
      {
        path:'register',
         element:<Register/>
      }
    ]
  }
]);
export default function Routers() {
  return (
    <div>
      
    </div>
  )
}
