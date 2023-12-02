import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Firebase/Providers/AuthProviders";
import useAxiosPublic from './../../components/Hooks/useAxiosPublic';
import Swal from "sweetalert2";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // const onSubmit = (data) => {
    //     createUser(data.email, data.password)
    //     .then(result=>{
    //         const loggedUser = result.user;
    //         console.log(loggedUser);
    //         updateUserProfile(data.name, data.photoUrl)
    //         .then(()=>{

    //         })
    //     })
    // }

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/serveUser', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your Registration done",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                        console.log(userInfo);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.error("Error My Code", error))
    }



    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 container mx-auto my-8">
            <h2 className="mb-3 text-3xl font-semibold text-center">Sign Up</h2>
            <p className="text-sm text-center dark:text-gray-400">have account?
                <Link to="/login">
                    <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-blue-600">Log in here</a>
                </Link>
            </p>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <div noValidate="" action="" className="space-y-8">
                <div className="space-y-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Name</label>
                            {errors.name && <span className="text-red-600">This field is required Name</span>}
                            <input type="text" name="name" {...register("name")} id="email" placeholder="Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Photo Url</label>
                            <input type="text" name="photoUrl" {...register("photoUrl")} id="email" placeholder="Your Photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" {...register("email")} id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2 mt-4">
                            <input type="password" {...register("password")} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <input className="w-full px-8 py-3 font-semibold rounded-md bg-green-400 mt-4" type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default SignUp;