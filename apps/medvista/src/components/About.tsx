export function About() {
  return (
    <section id="about" className="bg-white py-20" data-testid="about">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/medvista-about/600/400"
            alt="Medvista medical clinic"
            className="w-full rounded object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-ink">
            We Are <span className="text-brand">Medvista</span> A Medical Clinic
          </h2>
          <p className="mt-6 text-body">
            We are dedicated to providing exceptional healthcare services with compassion and
            professionalism. Our experienced team of medical professionals is committed to improving
            the health and wellbeing of every patient we serve.
          </p>
          <p className="mt-4 text-body">
            With state-of-the-art facilities and a patient-centered approach, we ensure that every
            visit is comfortable and effective. Your health is our top priority.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#appointment"
              className="rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Make an appointment
            </a>
            <a
              href="#contact"
              className="rounded border-2 border-gray-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-body transition-colors hover:border-brand hover:text-brand"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
