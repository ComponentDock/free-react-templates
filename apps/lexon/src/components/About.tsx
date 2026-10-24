export function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-8 font-display text-4xl font-bold text-navy md:text-5xl">
            About Just Law
          </h2>
          <p className="mb-10 leading-relaxed text-smoke">
            We are a dedicated team of legal professionals committed to fighting for justice. With
            decades of combined experience, our attorneys provide personalized legal solutions
            tailored to each client's unique needs. We believe in transparency, integrity, and
            relentless advocacy.
          </p>
          <div className="flex gap-12">
            <div className="text-center">
              <span className="block font-display text-4xl font-bold text-primary-500">250+</span>
              <p className="mt-2 text-sm text-smoke">Happy Clients</p>
            </div>
            <div className="text-center">
              <span className="block font-display text-4xl font-bold text-primary-500">920+</span>
              <p className="mt-2 text-sm text-smoke">Winning Cases</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/justlaw-about-front/600/400"
            alt="Lawyer at desk"
            className="relative z-10 w-full rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/justlaw-about-back/600/400"
            alt="Courtroom"
            className="absolute -bottom-6 -right-6 z-0 w-2/3 rounded-lg shadow-md opacity-80"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
