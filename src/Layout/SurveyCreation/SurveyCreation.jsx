import Swal from "sweetalert2";
import useAxiosPublic from './../../components/Hooks/useAxiosPublic';
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SurveyCreation = () => {
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();


    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the survey`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    };


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">
                            Survey Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Survey Name"
                            {...register('name', { required: true })}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        {/* Category */}
                        <div className="flex-1 mb-4">
                            <label className="block text-sm font-medium text-gray-600">
                                Category <span className="text-red-600">*</span>
                            </label>
                            <select
                                defaultValue="default"
                                {...register('category', { required: true })}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            >
                                <option disabled value="default">
                                    Select a Category
                                </option>
                                <option value="health">Health</option>
                                <option value="sports">Sports</option>
                                <option value="food">Food</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="technology">Technology</option>
                                <option value="science">Science</option>
                            </select>
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Description</label>
                        <textarea
                            {...register('recipe', { required: true })}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            placeholder="Survey Details"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Image</label>
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                        Add Survey
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SurveyCreation;