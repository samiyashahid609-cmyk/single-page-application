import React from 'react'

function Statistics() {
  return (
  <section className="bg-[#0a192f] py-32 text-white">
  <div className="container mx-auto px-6 flex flex-col items-center gap-16">

    {/* Section Heading */}
    <div className="flex flex-col text-center w-full mb-16">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
        My Achievements
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300">
        Milestones and highlights from my journey as a web developer.
      </p>
    </div>

    {/* Cards Row */}
    <div className="flex flex-wrap justify-center items-center gap-12">

      {/* Card 1 */}
      <div className="relative w-50 h-50 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="absolute inset-0 rotate-45">
          <div className="w-full h-full border-4 border-purple-500 rounded-md
            bg-white/10 backdrop-blur-lg shadow-lg shadow-purple-500/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            className="text-purple-400 w-12 h-12 mb-2" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="font-bold text-3xl text-white mb-1">2.7K</h2>
          <p className="text-gray-300 font-semibold">Downloads</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-50 h-50 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="absolute inset-0 rotate-45">
          <div className="w-full h-full border-4 border-purple-500 rounded-md
            bg-white/10 backdrop-blur-lg shadow-lg shadow-purple-500/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            className="text-purple-400 w-12 h-12 mb-2" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="font-bold text-3xl text-white mb-1">1.3K</h2>
          <p className="text-gray-300 font-semibold">Users</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative w-50 h-50 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="absolute inset-0 rotate-45">
          <div className="w-full h-full border-4 border-purple-500 rounded-md
            bg-white/10 backdrop-blur-lg shadow-lg shadow-purple-500/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            className="text-purple-400 w-12 h-12 mb-2" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="font-bold text-3xl text-white mb-1">74</h2>
          <p className="text-gray-300 font-semibold">Files</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative w-50 h-50 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <div className="absolute inset-0 rotate-45">
          <div className="w-full h-full border-4 border-purple-500 rounded-md
            bg-white/10 backdrop-blur-lg shadow-lg shadow-purple-500/40"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            className="text-purple-400 w-12 h-12 mb-2" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="font-bold text-3xl text-white mb-1">46</h2>
          <p className="text-gray-300 font-semibold">Places</p>
        </div>
      </div>

    </div>
  </div>
</section>









  )
}

export default Statistics
