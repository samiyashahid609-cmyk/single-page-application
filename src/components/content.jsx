import React from 'react'

function Content() {
  return (
   <section class="bg-[#0a192f] text-gray-300 body-font">
  <div class="container px-5 py-32 mx-auto">

   
    <div class="flex flex-col items-center text-center mb-32"> 
      <h1 class="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
        About Me
      </h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400">
        A passionate frontend developer focused on building modern, user-friendly web experiences.
      </p>
    </div>

    
    <div class="flex flex-wrap -m-4">

  
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div
          class="group h-full bg-[#020c1b] border-2 border-purple-500/40
          rounded-2xl p-8 text-center transition-all duration-300
          hover:-translate-y-3 hover:border-purple-500
          hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
        >
          <div
            class="w-14 h-14 mx-auto mb-6 rounded-full
            flex items-center justify-center
            bg-purple-500/20 text-purple-400
            transition-all duration-300
            group-hover:bg-purple-500 group-hover:text-white group-hover:scale-110"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            </svg>
          </div>

          <h2 class="text-xl font-bold text-white mb-3">
            Creative Mindset
          </h2>
          <p class="text-gray-400 leading-relaxed">
            I love designing clean, modern interfaces that feel intuitive and visually appealing.
          </p>
        </div>
      </div>

    
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div
          class="h-full bg-[#020c1b] border-2 border-purple-500
          rounded-2xl p-8 text-center
          -translate-y-3
          shadow-[0_0_40px_rgba(168,85,247,0.9)]"
        >
          <div
            class="w-14 h-14 mx-auto mb-6 rounded-full
            flex items-center justify-center
            bg-purple-500 text-white scale-110"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>

          <h2 class="text-xl font-bold text-white mb-3">
            Frontend Developer
          </h2>
          <p class="text-gray-300 leading-relaxed">
            I specialize in React and Tailwind CSS, building responsive, interactive
            and performance-focused web applications.
          </p>
        </div>
      </div>

      
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div
          class="group h-full bg-[#020c1b] border-2 border-purple-500/40
          rounded-2xl p-8 text-center transition-all duration-300
          hover:-translate-y-3 hover:border-purple-500
          hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
        >
          <div
            class="w-14 h-14 mx-auto mb-6 rounded-full
            flex items-center justify-center
            bg-purple-500/20 text-purple-400
            transition-all duration-300
            group-hover:bg-purple-500 group-hover:text-white group-hover:scale-110"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            </svg>
          </div>

          <h2 class="text-xl font-bold text-white mb-3">
            Growth Driven
          </h2>
          <p class="text-gray-400 leading-relaxed">
            Always learning new technologies and improving my skills to grow as a developer.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

      
    
  )
}

export default Content
