import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../../components/Hooks/useAuth';
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const { signInUs } = useAuth();
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUs(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        navigate(from, { replace: true });
    }

    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 container mx-auto my-8">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-400">Do not have account?
                <Link to="/signUp">
                    <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600">Sign up here</a>
                </Link>
            </p>
            <div className="my-6 space-y-4">
                <SocialLogin></SocialLogin>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <form onSubmit={handleLogin} noValidate="" action="" className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                </div>
                <input className="w-full px-8 py-3 font-semibold rounded-md bg-green-400" type="submit" value="Sign in" />
            </form>
        </div>
    );
};

export default Login;