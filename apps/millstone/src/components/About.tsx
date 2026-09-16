export function About() {
  return (
    <section id="about" className="py-16 bg-mist">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/millstone-about/600/450"
            alt="Industrial facility"
            className="w-full rounded shadow-lg"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 bg-primary-400 text-white px-6 py-3 rounded font-heading font-bold text-sm">
            25+ Years Experience
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-heading mb-4">
            Safe Industry Solutions That Saves Our Valuable Time
          </h2>
          <p className="font-body text-sm text-body leading-relaxed mb-4">
            Logisti Group is a representative logistics operator providing full range of service in
            the sphere of sea, road, air and railway freight-shipping, customs clearance and
            warehousing.
          </p>
          <p className="font-body text-sm text-body leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur ipis adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
          <a
            href="#about"
            className="inline-flex bg-primary-400 text-white px-6 py-3 rounded font-heading text-sm font-semibold uppercase hover:bg-primary-500 transition-colors"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
