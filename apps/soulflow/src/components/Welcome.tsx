export function Welcome() {
  return (
    <section id="welcome" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/soulflow-welcome/600/400"
              alt="Yoga studio"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Welcome To Soulflow
            </h2>
            <p className="text-soulflow-teal uppercase tracking-[0.2em] text-sm mb-6">
              Hello there!
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Discover the transformative power of yoga at Soulflow. Our studio offers a sanctuary
              for practitioners of all levels, guided by experienced instructors who nurture your
              mind, body, and spirit.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-soulflow-teal text-white px-8 py-3 rounded-full font-medium hover:bg-teal-400 transition-colors"
            >
              See The Yoga Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
