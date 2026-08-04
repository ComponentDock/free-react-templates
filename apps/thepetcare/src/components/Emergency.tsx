export function Emergency() {
  return (
    <section className="bg-lavender py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-[20px] bg-white p-10 text-center shadow-md dark:bg-gray-800 sm:p-14">
          <h2 className="font-display text-2xl leading-snug text-heading dark:text-white sm:text-3xl">
            For Emergency care Just Call Us
          </h2>
          <a
            href="tel:+10898373678"
            className="mt-6 inline-block text-2xl font-bold text-brand transition-colors hover:text-navy3"
          >
            +10 (89) 837 3678
          </a>
          <div className="mt-8">
            <a
              href="#about"
              className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
