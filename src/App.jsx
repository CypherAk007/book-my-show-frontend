import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginSignup from './Components/LoginSignUp/LoginSignup'
import { BrowserRouter as Router,Route,  Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Components/Home/HomePage'
import Login from './Components/LoginSignUp/Login'
import SignUpCompany from './Components/LoginSignUp/SignUpCompany'
import SignUp from './Components/LoginSignUp/SignUp'
import ErrorPage from './Components/Error/ErrorPage'
import RouteLayout from './Components/Navigation/RouteLayout'

const router = createBrowserRouter([
  {path:'/',element:<RouteLayout></RouteLayout>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[

    {path:'',element:<HomePage></HomePage>},
    {path:'login',element:<Login></Login>},
    {path:'signup',element:<SignUp></SignUp>},
    {path:'signup-company',element:<SignUpCompany></SignUpCompany>}
  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" ">
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  )
}

export default App
