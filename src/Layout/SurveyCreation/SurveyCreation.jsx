import Swal from "sweetalert2";
// import useAxiosPublic from './../../components/Hooks/useAxiosPublic';





const SurveyCreation = () => {
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const description = form.description.value;
        const title = form.title.value;
        const category = form.category.value;

        const myData = {
            description,
            title,
            category
        }

        console.log("My Data is", myData);

        fetch('https://assignment-12-server-one-tan.vercel.app/featuredSurvey', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your Survey Created done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create a Survey</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category:</label>
                    <select className="w-full border rounded-md p-2" name="category" required>
                        <option value="">Select:</option>
                        <option value="health">Health</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="food">Food</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <input className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700" type="submit" value="Create Survey" />
            </form>
        </div>
    );
};

export default SurveyCreation;