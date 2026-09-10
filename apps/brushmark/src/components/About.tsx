export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Image — hidden on mobile */}
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/brushmark-about/600/700"
            alt="About me portrait"
            className="rounded-lg object-cover shadow-lg"
            width={600}
            height={700}
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-pink">
            About me
          </p>
          <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">
            Creative Art Director And Designer
          </h2>
          <p className="mb-6 leading-relaxed text-mist">
            With over a decade of experience in the creative industry, I specialize in transforming
            brands through strategic design thinking. My approach blends aesthetic beauty with
            functional purpose, ensuring every project not only looks stunning but delivers
            measurable results.
          </p>
          <p className="mb-8 leading-relaxed text-mist">
            From brand identity to digital experiences, I bring a meticulous eye for detail and a
            passion for innovation to every collaboration.
          </p>
          <a
            href="#"
            className="inline-block rounded-[5px] bg-gradient-to-r from-brand-blue to-brand-pink px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
