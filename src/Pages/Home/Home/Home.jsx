import SurveySection from "../SurveySection/SurveySection";
import Banner from "./Banner/Banner";
import HowWork from "./HowWork/HowWork";
import LatestSurvey from "./LatestSurvey/LatestSurvey";




const Home = () => {
    return (
        <div className="">
            <div className="bg-gray-400">
                <Banner></Banner>
            </div>
            <div>
                <SurveySection></SurveySection>
            </div>
            <div>
                <LatestSurvey></LatestSurvey>
            </div>
            <div className="container mx-auto py-8">
                <HowWork></HowWork>
            </div>
        </div>
    );
};

export default Home;