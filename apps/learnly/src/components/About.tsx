export function About() {
  return (
    <section className="relative py-16 md:py-24" id="about">
      <img
        src="https://picsum.photos/seed/learnly-about/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">About Our University</h2>
            <div className="h-1 w-16 bg-brand" />
          </div>
          <div className="md:col-span-3">
            <p className="mb-4 text-lg leading-relaxed text-white/90">
              Learnly University is dedicated to providing world-class education to students around
              the globe. Our mission is to empower learners with the knowledge and skills they need
              to succeed in an ever-changing world.
            </p>
            <p className="mb-6 text-white/70">
              Founded by educators and industry professionals, our curriculum combines academic
              rigor with practical application. We believe education should be accessible, engaging,
              and transformative. Our faculty members are leaders in their fields, bringing
              real-world experience to every lecture and workshop.
            </p>
            <a
              href="#"
              className="inline-block font-semibold text-brand underline transition-colors hover:text-brand-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
