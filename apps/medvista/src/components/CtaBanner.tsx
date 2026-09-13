export function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/medvista-cta/1920/600')" }}
      data-testid="cta-banner"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
          Your Health is Our Priority
        </h2>
        <p className="mt-6 text-gray-300">
          We are committed to providing the highest quality healthcare services. Your wellbeing
          drives everything we do — from routine checkups to specialized treatments.
        </p>
        <a
          href="#departments"
          className="mt-8 inline-block rounded border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:border-white hover:bg-transparent hover:text-white"
        >
          Search Places
        </a>
      </div>
    </section>
  )
}
