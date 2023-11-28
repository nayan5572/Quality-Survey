import { useContext } from "react";
import { AuthContext } from "../Firebase/Providers/AuthProviders";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;