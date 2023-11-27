import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Home/Home/Navigation/Navigation";

const Main = () => {
    return (
        <div className="bg-gray-400">
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;