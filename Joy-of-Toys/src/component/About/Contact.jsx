// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
    return (
        
            <div className="bg-gray-100 min-h-screen">
              <div className="container mx-auto py-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-6">
                  Contact Us
                </h1>
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We would love to hear from you! If you have any questions, comments,
                    or feedback, please do not hesitate to reach out to us. <br/>
                    <span className='font-bold text-xl p-1'>Emergency Contact</span> <br/>
                    <span className='p-1'>Email: joytoy@gmail.com</span> <br/>
                    <span className='p-1'>Phone: 01558585858</span> <br/>
                    Or
                  </p>
                  <form className="mt-6">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-lg font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-lg font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 text-lg font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-200"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
    );
};

export default Contact;