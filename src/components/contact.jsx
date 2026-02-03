import React from 'react'

function ContactForm() {
  return (
   <section className="relative bg-[#0a192f] py-24">
  <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap gap-10 relative z-10">

    {/* MAP */}
    <div className="lg:w-2/3 md:w-1/2 relative rounded-2xl overflow-hidden sm:mr-10 shadow-2xl">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0 rounded-2xl"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          filter: 'grayscale(1) contrast(1.2) opacity(0.6)',
          borderRadius: '1rem',
        }}
      ></iframe>
    </div>

    {/* Feedback Form */}
    <div className="lg:w-1/3 md:w-1/2 bg-[#020c1b] bg-opacity-90 backdrop-blur-md flex flex-col md:ml-auto w-full md:py-8 px-8 rounded-2xl shadow-lg">
      <h2 className="text-white text-2xl mb-4 font-bold title-font">Feedback</h2>
      <p className="leading-relaxed mb-6 text-gray-400 text-sm">Have a question or want to collaborate? Send me a message!</p>

      {/* Name Input */}
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full bg-gray-900 bg-opacity-50 rounded border border-gray-700 text-base outline-none text-gray-100 py-2 px-4 leading-8
          focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
          shadow-lg shadow-purple-500/50"
        />
      </div>

      {/* Email Input */}
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          className="w-full bg-gray-900 bg-opacity-50 rounded border border-gray-700 text-base outline-none text-gray-100 py-2 px-4 leading-8
          focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
          shadow-lg shadow-purple-500/50"
        />
      </div>

      {/* Message Textarea */}
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          className="w-full bg-gray-900 bg-opacity-50 rounded border border-gray-700 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6
          focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
          shadow-lg shadow-purple-500/50"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="text-white bg-purple-500 border-0 py-3 px-6 rounded-full hover:bg-purple-600 transition duration-300 font-semibold shadow-md hover:shadow-purple-500/50 text-lg mt-2">
        Send Message
      </button>

      <p className="text-xs text-gray-500 mt-4">I'll try to reply within 24 hours. Thank you!</p>
    </div>
  </div>

  {/* Optional subtle animated gradient background */}
  <div className="absolute inset-0 -z-10">
    <div className="w-full h-full  from-purple-900 to-indigo-900 opacity-20 animate-pulse"></div>
  </div>
</section>


 


  )
}

export default ContactForm
