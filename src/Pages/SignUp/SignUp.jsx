import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 container mx-auto my-8">
        <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
        <p className="text-sm text-center dark:text-gray-400">have account?
            <Link to="/login">
                <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
            </Link>
        </p>
        <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
        </div>
        <form noValidate="" action="" className="space-y-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Name</label>
                    <input type="email" name="email" id="email" placeholder="Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Photo Url</label>
                    <input type="email" name="email" id="email" placeholder="Your Photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-2">
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
            </div>
            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-green-400">Sign Up</button>
        </form>
    </div>
    );
};

export default SignUp;