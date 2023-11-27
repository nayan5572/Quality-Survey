import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Home/Home/Navigation/Navigation";
import Footer from "../Pages/Home/Home/Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;