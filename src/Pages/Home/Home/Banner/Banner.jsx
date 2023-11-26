// import img1 from '../../../../assets/image/banner.jpg';


const Banner = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center h-[50rem] md:h-[50rem] mt-4" style={{ backgroundImage: "url('https://i.ibb.co/p0dqjG0/banner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 h-[800px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-7 text-center">
                        <div className="text-center mx-auto">
                            <h1 className="text-7xl font-bold mb-4 text-white">Welcome to Our Survey Website</h1>
                            <p className="text-lg mb-8 text-white">Explore and participate in surveys to share your opinion.</p>
                            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-blue-600">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;