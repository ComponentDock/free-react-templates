export function Welcome() {
  return (
    <section id="about" aria-label="About" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">Welcome to Medora Clinic</h2>
          <p className="mt-5 text-sm leading-relaxed text-body">
            We&apos;ve built a long-standing relationship based on trust — every patient receives
            personalized attention, clear guidance, and a care plan tailored to their needs.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-body">
            Our modern facilities combine experienced specialists, advanced diagnostics, and a warm
            environment, so you and your family always feel at home.
          </p>
        </div>
        <img
          src="https://picsum.photos/seed/medora-clinic/640/480"
          alt="Medora Clinic building"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}
