import './App.css'

function App() {

  return (
    <div className='bg-gray-300'>


      {/* Latest Surveys Section */}
 

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <p className="text-lg mb-8">Explain the process of using your website. Use images or icons to illustrate the steps.</p>
          {/* Add steps or content explaining how the website works */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Testimonial Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="avatar1.jpg" alt="User Avatar" className="w-12 h-12 rounded-full mb-4 mx-auto" />
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur.</p>
              <p className="font-semibold">- User Name</p>
            </div>
            {/* Repeat this block for each testimonial */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="accordion">
            {/* Sample FAQ Item */}
            <div className="mb-4">
              <input type="checkbox" id="faq1" className="hidden" />
              <label htmlFor="faq1" className="text-lg font-semibold cursor-pointer">How do I design and implement in Tailwind CSS?</label>
              <div className="ml-8">
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* Repeat this block for each FAQ item */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
