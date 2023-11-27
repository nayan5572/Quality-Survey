import SurveySection from "../SurveySection/SurveySection";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import HowWork from "./HowWork/HowWork";
import LatestSurvey from "./LatestSurvey/LatestSurvey";
import Testimonials from "./Testimonials/Testimonials";




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
            <div>
                <Testimonials></Testimonials>
            </div>
            <div>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;