import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";



const SurveyList = () => {
    const surveyList = useLoaderData();
    console.log("All Data is My", surveyList);

    const axiosSecure = useAxiosSecure();

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
                axiosSecure.delete(`/featuredSurvey/${user._id}`)
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
                        <h2 className="text-3xl">Total Surveys: {surveyList.length}</h2>
                    </div>
                    <table className="w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border">Sl</th>
                                <th className="py-2 px-4 border">Picture</th>
                                <th className="py-2 px-4 border">Title</th>
                                <th className="py-2 px-4 border">Category</th>
                                <th className="py-2 px-4 border">Edit</th>
                                <th className="py-2 px-4 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {surveyList.map((user, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border">{index + 1}</td>
                                    <td className="py-2 px-4 border">
                                        <img className="w-[5.5rem] rounded-lg" src={user.image} alt="" />
                                    </td>
                                    <td className="py-2 px-4 border">{user.title}</td>
                                    <td className="py-2 px-4 border">{user.category}</td>
                                    <td className="py-2 px-4 border">
                                        <FaEdit className="text-3xl text-green-300"></FaEdit>
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

export default SurveyList;