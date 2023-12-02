import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../components/Hooks/useAdmin";
import useAuth from "../../components/Hooks/useAuth";
import { FaHome, FaUtensils, FaWallet, FaUsers } from "react-icons/fa";
// import Navigation from "../../Pages/Home/Home/Navigation/Navigation";


const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();

    // const isAdmin = true;


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
                <ul className="menu space-y-8">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/createSurvey">Create Survey</NavLink></li>
                            <li><NavLink to="/dashboard/surveyList">Survey List</NavLink></li>
                            <li><NavLink to="/dashboard/paymentTransaction">Payment Transaction</NavLink></li>
                            <li><NavLink to="/dashboard/usersList">Users List</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome"> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/userProfile"> Profile</NavLink></li>
                                <li><NavLink to="/dashboard/payment"> Payment Transaction</NavLink></li>
                            </>
                    }
                    <div className="border-t py-8">
                        <li><NavLink to="/">Main Home</NavLink></li>
                    </div>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;