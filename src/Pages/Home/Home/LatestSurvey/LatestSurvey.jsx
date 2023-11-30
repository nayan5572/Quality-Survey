import { useEffect, useState } from "react";
import MostLatest from "./MostLatest";

const LatestSurvey = () => {
    const [latestSurvey, setLatestSurvey] = useState([]);


    useEffect(() => {
        fetch('https://assignment-12-server-one-tan.vercel.app/latest')
            .then(res => res.json())
            .then(data => setLatestSurvey(data))
    }, []);


    return (
        <div className="bg-gray-200">
            <h2 className="text-center text-4xl font-bold py-4">Latest Surveys Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto bg-white p-6">
                {
                    latestSurvey.map(latest => <MostLatest key={latest._id} latest={latest}></MostLatest>)
                }
            </div>
        </div>
    );
};

export default LatestSurvey;