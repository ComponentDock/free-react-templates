export function CtaBanner() {
  return (
    <section className="bg-primary-400 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6">
        <h2 className="max-w-xl text-2xl font-bold text-white md:text-3xl">
          Schedule your appointment for a free consultation
        </h2>
        <a
          href="#contact"
          className="inline-block rounded bg-white px-8 py-3 text-sm font-semibold text-primary-600 transition-colors hover:bg-gray-100"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
