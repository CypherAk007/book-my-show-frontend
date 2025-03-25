import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"

const RouteLayout = ()=>{
    return (
        <>
            <MainNavigation></MainNavigation>
            <main className={`my-8 mx-auto text-center text-5xl  `}>

            <Outlet></Outlet>
            </main>
        </>
    )
}

export default RouteLayout