import { useEffect, useState } from "react";
import useAuth from "../../../components/Hooks/useAuth";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import { FaBookOpen, FaUsers, FaVoteYea } from "react-icons/fa";




const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [serveUser, setServeUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosSecure.get('/serveUser');
                setServeUser(res.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [axiosSecure]);


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome: </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div>
                <section className="p-6 my-6 bg-gray-800 dark:text-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaUsers className="text-4xl"></FaUsers>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">{serveUser.length}</p>
                                <p className="capitalize">Users</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaBookOpen className="text-4xl"></FaBookOpen>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">12</p>
                                <p className="capitalize">Total Survey</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaVoteYea className="text-4xl"></FaVoteYea>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">172</p>
                                <p className="capitalize">Total Votes</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">$ 2000</p>
                                <p className="capitalize">Total Bounce</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminHome;