import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        
                        <NavLink to ="/">Home</NavLink>
                        <NavLink to ="/deshboard">DeshBoard</NavLink>
                        <NavLink to ="/listed-books">Listed Books</NavLink>
                    </ul>
                </div>
               <NavLink to = '/'>
                <a className="btn btn-ghost text-xl">Boi Poka</a>
               </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className={`m-2 px-4 py-2 font-bold text-base`} to ="/">Home</NavLink>
                    <NavLink className={`m-2 px-4 py-2 font-bold text-base`} to ="/deshboard">DeshBoard</NavLink>
                    <NavLink className={`m-2 px-4 py-2 font-bold text-base`} to ="/listed-books">Listed Books</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;