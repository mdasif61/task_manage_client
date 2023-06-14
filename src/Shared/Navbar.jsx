import { Link, NavLink } from "react-router-dom";
import Container from "../Layout/Container";

const Navbar = () => {

    const  navManu=<>
        <NavLink to='/' className={({isActive})=>isActive?'mr-7 bg-blue-800 text-white py-3 px-7 rounded-full':'mr-7 border-b rounded-full border-blue-900 px-7 py-3'}><li>Home</li></NavLink>
        <NavLink to='/mytask' className={({isActive})=>isActive?'mr-7 bg-blue-800 text-white py-3 px-7 rounded-full':'mr-7 border-b rounded-full border-blue-900 px-7 py-3'}><li>My Task</li></NavLink>
        <NavLink to='/addtask' className={({isActive})=>isActive?'mr-7 bg-blue-800 text-white py-3 px-7 rounded-full':'mr-7 border-b rounded-full border-blue-900 px-7 py-3'}><li>Add Task</li></NavLink>
    </>

    return (
        <div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                               {navManu}
                            </ul>
                        </div>
                        <Link className="text-xl font-bold text-gray-500 cursor-pointer" to='/'><span className="text-2xl text-blue-800">Task</span> Manage System</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navManu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link>
                            <button className="btn bg-blue-800 text-white hover:bg-blue-700">Conpleted Task</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;