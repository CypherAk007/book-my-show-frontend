import { Link, NavLink } from "react-router-dom"
import classes from './MainNavigation.module.scss'
const MainNavigation = ()=>{
    return (
        <header className={` bg-slate-800  min-w-5xl m-auto p-8 flex justify-center text-2xl`}>
            <nav className="">
                <ul className={`flex gap-8 ${classes.list}`}>
                    <li className=" decoration-solid  text-green-600">
                        <NavLink to='login' className={({isActive})=>isActive?'text-white underline':undefined } end>Login</NavLink>
                    </li>
                    <li className=" decoration-solid  text-green-600">
                    <NavLink to='signup' className={({isActive})=>isActive?classes.active:undefined} end>Sign Up</NavLink>
                    </li>
                    <li className=" decoration-solid  text-green-600">
                    <NavLink to='signup-company' className={({isActive})=>isActive?classes.active:undefined} end>Company Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation