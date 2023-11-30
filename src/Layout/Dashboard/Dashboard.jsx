import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../../components/Hooks/useAdmin";
import useAuth from "../../components/Hooks/useAuth";
import { FaHome, FaUtensils, FaWallet, FaList, FaBook, FaUsers } from "react-icons/fa";


const Dashboard = () => {

    const { user } = useAuth();
    // const [isAdmin] = useAdmin();

    const isAdmin = true;


    return (
        <div className="flex">
            <div className="h-full p-3 space-y-2 w-60 bg-gray-600 text-gray-100 my-11 ml-4">
            {/* h-full p-3 space-y-2 w-60 bg-gray-600 text-gray-100 my-11 ml-4 */}
                <div className="flex items-center p-2 space-x-4">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                        </span>
                    </div>
                </div>
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils> Create Survey</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome"> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/cart"> My Survey</NavLink></li>
                                <li><NavLink to="/dashboard/review"> Add Vote</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory"> Payment History</NavLink></li>
                            </>
                    }
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;