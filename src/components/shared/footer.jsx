function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 body-font">
      {/* TOP FOOTER */}
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">

          {/* COLUMN 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-sm mb-4">
              SERVICES
            </h2>
            <nav className="space-y-2">
              <a className="block hover:text-purple-400 cursor-pointer">Web Design</a>
              <a className="block hover:text-purple-400 cursor-pointer">Frontend Dev</a>
              <a className="block hover:text-purple-400 cursor-pointer">UI / UX</a>
              <a className="block hover:text-purple-400 cursor-pointer">SEO</a>
            </nav>
          </div>

          {/* COLUMN 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-10 md:mt-0">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-sm mb-4">
              ABOUT
            </h2>
            <nav className="space-y-2">
              <a className="block hover:text-purple-400 cursor-pointer">My Story</a>
              <a className="block hover:text-purple-400 cursor-pointer">Experience</a>
              <a className="block hover:text-purple-400 cursor-pointer">Projects</a>
              <a className="block hover:text-purple-400 cursor-pointer">Skills</a>
            </nav>
          </div>

          {/* COLUMN 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-10 lg:mt-0">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-sm mb-4">
              QUICK LINKS
            </h2>
            <nav className="space-y-2">
              <a className="block hover:text-purple-400 cursor-pointer">Home</a>
              <a className="block hover:text-purple-400 cursor-pointer">Portfolio</a>
              <a className="block hover:text-purple-400 cursor-pointer">Contact</a>
              <a className="block hover:text-purple-400 cursor-pointer">Resume</a>
            </nav>
          </div>

          {/* SUBSCRIBE COLUMN */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-10 lg:mt-0">
            <h2 className="title-font font-semibold text-purple-400 tracking-widest text-sm mb-4">
              SUBSCRIBE
            </h2>

            {/* INPUT + BUTTON (SAME LINE ALWAYS) */}
            <div className="flex flex-nowrap items-center gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-[#020c1b] border border-purple-500 rounded px-3 py-2 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-500 text-white px-5 py-2 rounded hover:bg-purple-600 transition whitespace-nowrap">
                Send
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-3">
              Get updates & latest work
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700">
        <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row items-center">
          <span className="text-sm text-gray-500">
            © 2026 Samiya Shahid — All Rights Reserved
          </span>

          <span className="inline-flex sm:ml-auto mt-4 sm:mt-0 gap-4">
            <a className="hover:text-purple-400 cursor-pointer">FB</a>
            <a className="hover:text-purple-400 cursor-pointer">TW</a>
            <a className="hover:text-purple-400 cursor-pointer">IG</a>
            <a className="hover:text-purple-400 cursor-pointer">IN</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
