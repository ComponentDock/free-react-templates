export function Impact() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/refuge-impact/600/400"
              alt="Property damage"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold uppercase text-ink md:text-4xl">
              Thousands of Houses Damage Each Year
            </h2>
            <p className="mb-6 text-mist">
              Natural disasters and unforeseen events cause billions in property damage every year.
              Do not leave your home vulnerable — get the comprehensive coverage you need to rebuild
              and recover.
            </p>
            <a
              href="#"
              className="inline-block rounded border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              Insure Yours Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
