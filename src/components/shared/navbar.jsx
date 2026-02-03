import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <header class="bg-[#0a192f] body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <a class="flex items-center gap-2 cursor-pointer">
      
      <div class="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white text-lg font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 4v16m8-8H4" />
        </svg>
      </div>

      
      <span class="text-xl font-bold text-purple-400">Sami</span>
    </a>

    
    <nav class="md:ml-auto md:mr-auto flex items-center gap-10 text-base">
      <Link to="/" class="text-white hover:text-purple-400 transition cursor-pointer">Home</Link>
      <Link to="/about" class="text-white hover:text-purple-400 transition cursor-pointer">About</Link>
      <Link to="/projects" class="text-white hover:text-purple-400 transition cursor-pointer">Projects</Link>
      <Link to="/contact" class="text-white hover:text-purple-400 transition cursor-pointer">Contact</Link>
    </nav>

    <button
      class="border-2 border-purple-500 text-purple-400 px-6 py-2 rounded-full
      hover:bg-purple-600 hover:text-white transition cursor-pointer mt-4 md:mt-0">
      Hire Me
    </button>

  </div>
</header>



  
      
    
  )
}

export default Navbar