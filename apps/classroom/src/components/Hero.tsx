export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/classroom-hero/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Learn From The Expert
            </h1>
            <p className="text-gray-300 mb-6 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis
              rerum amet natus quas necessitatibus.
            </p>
            <a
              href="#courses"
              className="inline-block bg-indigo-500 text-white px-10 py-3 rounded-full text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
            >
              Admission Now
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sign Up</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
              />
              <input
                type="password"
                placeholder="Re-type Password"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-full text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
