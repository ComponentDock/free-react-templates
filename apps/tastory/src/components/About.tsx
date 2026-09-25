export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-12">
          {/* Text */}
          <div className="md:col-span-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-brand">
              Our Story
            </p>
            <h2 className="mb-6 font-heading text-4xl font-bold text-black md:text-5xl">Welcome</h2>
            <p className="mb-4 text-body-text">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <p className="mb-8 text-body-text">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <a
              href="#about"
              className="inline-block bg-gray-800 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-brand"
            >
              Learn More About Us
            </a>
          </div>

          {/* Image */}
          <div className="md:col-span-1" />
          <div className="md:col-span-6">
            <img
              src="https://picsum.photos/seed/tastory-about/800/600"
              alt="Restaurant interior"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
