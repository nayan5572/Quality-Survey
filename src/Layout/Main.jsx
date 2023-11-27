import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Home/Home/Navigation/Navigation";

const Main = () => {
    return (
        <div className="">
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;