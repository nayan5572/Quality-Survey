import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-gray-400">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;