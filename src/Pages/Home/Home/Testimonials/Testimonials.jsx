import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-one-tan.vercel.app/testimonial')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    return (
        <div className="py-8 bg-white container mx-auto">
            <div>
                <h1 className="text-5xl font-bold text-center">Testimonials</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
                {
                    testimonial.map(testModel => <Testimonial key={testModel._id} testModel={testModel}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;