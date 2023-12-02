import { useState } from "react";

const MostLatest = ({ latest }) => {
    const [like, setLike] = useState([]);
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={latest.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracki uppercase dark:text-violet-400"><span className="font-bold">Category:</span> {latest.category}</span>
                    <h2 className="text-xl font-semibold tracki">{latest.title}</h2>
                </div>
                <p className="dark:text-gray-100">{latest.description}</p>
                <div className="flex justify-between py-4">
                    <button className="btn-small border px-2 bg-green-300">Like {like + 1}</button>
                    <button className="btn-small border px-2 bg-red-300">Dislike</button>
                    <button className="btn-small px-4 border">Comments</button>
                </div>
            </div>
        </div>
    );
};

export default MostLatest;