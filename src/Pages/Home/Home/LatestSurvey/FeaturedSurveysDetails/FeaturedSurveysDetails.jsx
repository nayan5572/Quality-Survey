import { useLoaderData } from "react-router-dom";

const FeaturedSurveysDetails = () => {
    const myData = useLoaderData();

    const { title, image, category, description } = myData;

    return (
        <div className="py-8">
            <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 container mx-auto">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>Category: {category}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold text-violet-400">{title}</h3>
                        </a>
                        <p className="leadi dark:text-gray-400">{description}</p>
                    </div>
                </div>
                <div className="py-4">
                    <div className="w-full py-6">
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <input
                                    type="radio"
                                    id="hosting-small"
                                    name="hosting"
                                    value="hosting-small"
                                    className="hidden peer"
                                    required
                                />
                                <label
                                    htmlFor="hosting-small"
                                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Yes</div>
                                        <div className="w-full">Total Votes: </div>
                                    </div>
                                    <svg
                                        className="w-5 h-5 ms-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="hosting-big"
                                    name="hosting"
                                    value="hosting-big"
                                    className="hidden peer"
                                />
                                <label
                                    htmlFor="hosting-big"
                                    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">No</div>
                                        <div className="w-full">Total Votes: </div>
                                    </div>
                                    <svg
                                        className="w-5 h-5 ms-3 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </label>
                            </li>
                        </ul>
                        
                        <div className="py-4">
                            <input className="container mx-auto py-4 border pointer bg-green-400 font-bold text-xl cursor-pointer" type="submit" value="Submit Now" />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Like
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Dislike
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                            Comments
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Reports
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedSurveysDetails;