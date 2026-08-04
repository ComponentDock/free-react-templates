export function CallCta() {
  return (
    <section id="contact" className="bg-navy py-16 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Any time you can call us!
        </h2>
        <p className="mt-5 font-light leading-relaxed text-white/70">
          Because we know that even the best technology is only as good as the people behind it, our
          team is always ready to help.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <a
            href="tel:+8804664216"
            className="inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-gray-100"
          >
            Contact Us
          </a>
          <p className="text-lg font-bold text-white">
            Or call us at <span className="text-white/80">+880 4664 216</span>
          </p>
        </div>
      </div>
    </section>
  )
}
