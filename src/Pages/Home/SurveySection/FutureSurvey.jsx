

const FutureSurvey = ({ fedData }) => {
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={fedData.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracki">{fedData.title}</h2>
                    <p className="dark:text-gray-100 font-bold">{fedData.category}</p>
                    <p className="dark:text-gray-100">{fedData.description}</p>
                    <div className="flex justify-between py-4">
                        <button className="btn-small border px-2 bg-green-300">Like</button>
                        <button className="btn-small border px-2 bg-red-300">Dislike</button>
                        <button className="btn-small px-4 border">Comments</button>
                    </div>
                    <p className="dark:text-gray-100"><span className="font-bold">Total Votes:</span> {fedData.totalVotes}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900 border bg-green-200">View Details</button>
            </div>
        </div>
    );
};

export default FutureSurvey;