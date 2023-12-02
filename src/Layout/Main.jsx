import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Pages/Home/Home/Navigation/Navigation";
import Footer from "../Pages/Home/Home/Footer/Footer";

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');


    return (
        <div className="">
            {noHeaderFooter || <Navigation></Navigation>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;