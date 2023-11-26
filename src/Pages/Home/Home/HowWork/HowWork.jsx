import img1 from '../../../../assets/image/howW.jpg';



const HowWork = () => {
    return (
        <div className="bg-white p-4">
            <h2 className="text-center text-5xl font-bold py-6">How it Work</h2>
            <p className="text-3xl text-center">After signing up, tell us about yourself to get personalized offers. Redeem gift cards to your favorite retailers like Amazon and Walmart or get cash back from PayPal.</p>
            <div className="flex justify-center items-center my-8 p-4">
                <div className="w-1/2 space-y-4">
                    <h1 className='text-5xl font-bold'>Get paid to answer surveys. Anytime. Anywhere.</h1>
                    <p className='text-2xl'>Share your opinions by completing online surveys to earn extra cash. From single question polls to 30 minute market research questionnaires, theres always time to earn Sawbucks.
                    </p>
                    <button className="bg-green-600 p-6 rounded-lg text-white text-2xl">Sign Up Now</button>
                </div>
                <div className="w-1/2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HowWork;