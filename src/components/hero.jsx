import React from 'react';

function Hero() {
  return (
    
    <section
  className="bg-[#0a192f] flex items-center justify-center"
  style={{ minHeight: 'calc(100vh - 80px)' }}
>
  <div className="container mx-auto px-6 flex justify-center items-center">

    <div
      className="bg-[#020c1b] rounded-3xl shadow-2xl
      flex flex-col md:flex-row items-center
      gap-10 px-10 md:px-16 py-16 w-full max-w-6xl"  // <-- gap-10 instead of gap-16
    >

      {/* LEFT TEXT */}
      <div
        className="md:w-1/2 text-center md:text-left
        animate-[fadeInLeft_1s_ease-out]"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Hi, I am <span className="text-purple-400">Samiya</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Hi, I am a <span className="text-purple-400 font-semibold">Web Developer</span>
        </p>

        <button
          className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full
          hover:bg-purple-600 hover:text-white hover:scale-105
          transition duration-300 shadow-lg hover:shadow-purple-500/40"
        >
          View My Work
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="md:w-1/2 flex justify-center
        animate-[fadeInRight_1s_ease-out]"
      >
        <div className="relative w-80 h-80 rounded-full flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-70
            animate-pulse"
          ></div>

          <img
            src="/my.avif"
            alt="Samiya"
            className="relative z-10 w-64 h-64 object-cover rounded-full
            border-4 border-purple-500"
          />
        </div>
      </div>

    </div>
  </div>
</section>

  );
}

export default Hero;
