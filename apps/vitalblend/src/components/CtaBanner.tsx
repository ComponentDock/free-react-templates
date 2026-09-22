export function CtaBanner() {
  return (
    <section className="bg-brand py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="mb-3 text-3xl font-medium text-white lg:text-4xl">
              Happy mind healthy life
            </h2>
            <p className="text-gray-100">Almost before we knew it, we had left the ground</p>
          </div>
          <a
            href="#services"
            className="inline-block rounded-bl-xl border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          >
            Take a Service
          </a>
        </div>
      </div>
    </section>
  )
}
