import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const AllUsers = () => {
    // const axiosSecure = useAxiosSecure();

    // const { data: serveUser = [], refetch } = useQuery({
    //     queryKey: ['serveUser'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/serveUser');
    //         return res.data;
    //     }
    // });

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

    // make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/serveUser/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    location.reload();
                    // refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
                axiosSecure.delete(`/serveUser/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div>
            <div className="flex justify-evenly my-4">
                <div>
                    <div className="flex justify-evenly mb-8">
                        <h2 className="text-3xl">All Users</h2>
                        <h2 className="text-3xl">Total Users: {serveUser.length}</h2>
                    </div>
                    <table className="w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border">Sl</th>
                                <th className="py-2 px-4 border">Name</th>
                                <th className="py-2 px-4 border">Email</th>
                                <th className="py-2 px-4 border">Role</th>
                                <th className="py-2 px-4 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serveUser.map((user, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border">{index + 1}</td>
                                    <td className="py-2 px-4 border">{user.name}</td>
                                    <td className="py-2 px-4 border">{user.email}</td>
                                    <td className="py-2 px-4 border">
                                        {
                                            user.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-lg bg-orange-500 p-4 rounded-lg">
                                                <FaUsers className="text-white 
                                            text-2xl"></FaUsers>
                                            </button>
                                        }
                                    </td>
                                    <td className="py-2 px-4 border">
                                        {/* Add action buttons here */}
                                        {/* <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button> */}
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="bg-red-500 text-white px-3 py-1 rounded ml-2"
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;

