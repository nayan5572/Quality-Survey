import { useEffect, useState } from "react";
import FutureSurvey from "./FutureSurvey";

const SurveySection = () => {
    const [fedSureSur, setFeatureSur] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featuredSurvey')
            .then(res => res.json())
            .then(data => setFeatureSur(data))
    }, []);

    return (
        <div className="bg-gray-300">
            <h2 className="text-4xl font-bold my-4 text-center py-4">Featured Surveys Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-12 bg-white p-6">
                {
                    fedSureSur.slice(0,6).map(fedData => <FutureSurvey key={fedData._id} fedData={fedData}></FutureSurvey>)
                }
            </div>
        </div>
    );
};

export default SurveySection;