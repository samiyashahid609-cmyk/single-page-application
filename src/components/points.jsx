import React from 'react'

function Points() {
  return (
    <section className="bg-[#0a192f] text-white py-32">
      <div className="container px-5 mx-auto flex flex-col items-center gap-24">

        {/* Section Heading */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">My Extraordinary Qualities</h1>
          <p className="text-gray-300 leading-relaxed">
            Highlights of what makes me unique as a web developer.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col items-center gap-24 w-full">

          {/* Item 1 (normal hover) */}
          <div
            className="group flex flex-col md:flex-row items-center w-full max-w-4xl
            border-2 border-purple-500 rounded-xl p-6
            transition-all duration-300
            hover:-translate-y-4
            hover:shadow-[0_0_45px_rgba(168,85,247,0.7)]"
          >
            <div
              className="z-10 w-14 h-14 bg-purple-500 rounded-full
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-110
              group-hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <div className="md:pl-12 mt-6 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Creative Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                I have an extraordinary eye for design and creativity, always pushing boundaries to craft unique web experiences.
              </p>
            </div>
          </div>

          {/* Item 2 (PERMANENT hover) */}
          <div
            className="flex flex-col md:flex-row items-center w-full max-w-4xl
            border-2 border-purple-500 rounded-xl p-6
            -translate-y-4
            shadow-[0_0_50px_rgba(168,85,247,0.9)]"
          >
            <div
              className="z-10 w-14 h-14 bg-purple-500 rounded-full
              flex items-center justify-center
              scale-110
              shadow-[0_0_35px_rgba(168,85,247,1)]"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>

            <div className="md:pl-12 mt-6 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Problem Solving</h2>
              <p className="text-gray-300 leading-relaxed">
                I approach challenges with analytical thinking and creative solutions, delivering exceptional results every time.
              </p>
            </div>
          </div>

          {/* Item 3 (normal hover) */}
          <div
            className="group flex flex-col md:flex-row items-center w-full max-w-4xl
            border-2 border-purple-500 rounded-xl p-6
            transition-all duration-300
            hover:-translate-y-4
            hover:shadow-[0_0_45px_rgba(168,85,247,0.7)]"
          >
            <div
              className="z-10 w-14 h-14 bg-purple-500 rounded-full
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-110
              group-hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]"
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>

            <div className="md:pl-12 mt-6 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Team Collaboration</h2>
              <p className="text-gray-300 leading-relaxed">
                I excel at working with teams and fostering collaboration to achieve extraordinary results in projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Points
