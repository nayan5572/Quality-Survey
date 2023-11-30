import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../components/Hooks/useAdmin";
import useAuth from "../components/Hooks/useAuth";





const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <p className="text-4xl">Loading...</p>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRouter;