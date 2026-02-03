import React from 'react'

function Experience() {
  return (
    <section className="bg-[#0a192f] py-32">
      <div className="container mx-auto px-6 flex flex-col items-center gap-12">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-white mb-12">
          About Me
        </h2>

        {/* Boxes */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-6xl">

          {/* Box 1 – hover only */}
          <div
            className="bg-[#020c1b] rounded-2xl p-6 border-2 border-purple-500
            text-center flex-1 h-80 flex flex-col justify-center
            transition-all duration-300 ease-in-out
            hover:-translate-y-4
            hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
            hover:border-purple-400"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-3">
              My Passion
            </h3>
            <p className="text-gray-300">
              I love creating interactive and beautiful web experiences that users enjoy.
            </p>
          </div>

          {/* Box 2 – PERMANENT glow */}
          <div
            className="bg-[#020c1b] rounded-2xl p-6 border-2 border-purple-400
            text-center flex-1 h-80 flex flex-col justify-center
            -translate-y-4
            shadow-[0_0_45px_rgba(168,85,247,0.9)]"
          >
            <h3 className="text-xl font-bold text-purple-300 mb-3">
              Skills
            </h3>
            <p className="text-gray-300">
              React, Tailwind CSS, JavaScript, and modern web development tools.
            </p>
          </div>

          {/* Box 3 – hover only */}
          <div
            className="bg-[#020c1b] rounded-2xl p-6 border-2 border-purple-500
            text-center flex-1 h-80 flex flex-col justify-center
            transition-all duration-300 ease-in-out
            hover:-translate-y-4
            hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
            hover:border-purple-400"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-3">
              Goals
            </h3>
            <p className="text-gray-300">
              To build meaningful web projects that make a difference and grow as a developer.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
