import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="top-0 left-0 w-full px-16">
            <div className="md:flex bg-white md:p-4 justify-between">
                <div className="md:px-6 p-3 md:p-0 text-primary flex items-center mb-3 justify-between md:justify-start">
                    <p className="font-bold text-2xl ml-2 md:ml-0">Bonevian</p>
                </div>
                <ul id="nav-menu" className="hidden md:flex flex-col md:flex-row items-center">
                    <li className="md:ml-4 w-full text-center border-t-2 border-primary p-1 md:border-none md:p-0"><NavLink to="/" className="nav-item">Home</NavLink></li>
                    <li className="md:ml-4 w-full text-center border-t-2 border-primary p-1 md:border-none md:p-0"><NavLink to="/about" className="nav-item">About</NavLink></li>
                    <li className="md:ml-4 w-full text-center border-t-2 border-primary p-1 md:border-none md:p-0"><NavLink to="/projects" className="nav-item">Projects</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;