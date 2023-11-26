
const MostLatest = ({ latest }) => {
    return (
        <div>
            {/* <section className="py-16 bg-gray-200">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-8">{latest.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Survey Title</h3>
                        </div>
                    </div>
                </div>
            </section> */}


            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracki uppercase dark:text-violet-400"><span className="font-bold">Category:</span> {latest.category}</span>
                    <h2 className="text-xl font-semibold tracki">{latest.title}</h2>
                </div>
                <p className="dark:text-gray-100">{latest.description}</p>
            </div>
        </div>
    );
};

export default MostLatest;