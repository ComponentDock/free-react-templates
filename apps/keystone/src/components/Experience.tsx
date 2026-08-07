export function Experience() {
  return (
    <section
      id="experience"
      className="bg-navy py-20 dark:bg-gray-900"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id="experience-heading"
          className="font-display text-3xl font-bold uppercase text-white sm:text-4xl"
        >
          Built on Half a Century of Craft
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70">
          We present our services with flexible, convenient and reusable layouts. Select your
          favorite approach and let our studio turn it into a landmark.
        </p>
        <a
          href="#about"
          className="mt-10 inline-block bg-brand px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
        >
          About Us
        </a>
      </div>
    </section>
  )
}
