export function About() {
  return (
    <section id="about" className="py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">About Us</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We are a community of yoga enthusiasts dedicated to sharing the transformative power
              of mindful movement. Our studio offers a welcoming space for practitioners of all
              levels.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Founded with a passion for wellness, we combine traditional techniques with modern
              approaches to help you find balance, strength, and serenity in your daily life.
            </p>
          </div>
          <div className="md:w-7/12 relative">
            <img
              src="https://picsum.photos/seed/asana-about1/500/350"
              alt="Yoga practice session"
              className="rounded-lg shadow-lg w-full max-w-md"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/asana-about2/400/280"
              alt="Meditation retreat"
              className="absolute -bottom-6 -right-4 md:-right-8 rounded-lg shadow-lg w-48 md:w-56 border-4 border-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
