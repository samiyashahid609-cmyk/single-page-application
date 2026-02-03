import React from 'react'

function Heroes() {
  return (
<section className="bg-[#0a192f] py-8">
  <div className="container mx-auto px-6 flex justify-center items-center">

    <div
      className="bg-[#020c1b] rounded-3xl shadow-2xl
      flex flex-col md:flex-row items-center
      gap-6 px-8 md:px-12 pt-8 pb-4 w-full max-w-4xl"
    >

      {/* LEFT TEXT */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Hi, I am <span className="text-purple-400">Samiya</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg">
          Web Developer
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-purple-600 blur-2xl opacity-60"></div>

          <img
            src="/my.avif"
            alt="Samiya"
            className="relative z-10 w-36 h-36 object-cover rounded-full
            border-4 border-purple-500"
          />
        </div>
      </div>

    </div>
  </div>
</section>



  )
}
    
  

export default Heroes;
