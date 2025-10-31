import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './components/Routers.jsx'
import { AuthContextProvider } from './AuthContext.jsx'
function App() {

  return (
    <>
    <AuthContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    </AuthContextProvider>
    </>
  )
}
export default App

