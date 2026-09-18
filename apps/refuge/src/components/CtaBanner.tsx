export function CtaBanner() {
  return (
    <section className="bg-brand py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="text-center font-display text-2xl font-bold uppercase text-white md:text-left md:text-3xl">
            Small Business Insurance Company
          </h2>
          <a
            href="#"
            className="whitespace-nowrap rounded bg-white px-8 py-3 text-sm font-semibold text-brand transition hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
