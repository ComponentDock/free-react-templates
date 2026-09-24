export function HeroBanner() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(https://picsum.photos/seed/medwell-hero/1920/800)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
            Making Health Care Better Together
          </h1>
          <p className="mt-6 text-base text-white/85">
            We provide comprehensive healthcare services with a team of experienced doctors and
            state-of-the-art facilities. Your well-being is our top priority.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block bg-brand-500 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
            >
              Make an Appointment
            </a>
            <a
              href="#services"
              className="inline-block border border-white bg-transparent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-heading"
            >
              View Department
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
