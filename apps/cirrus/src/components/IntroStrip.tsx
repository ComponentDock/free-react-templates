export function IntroStrip() {
  return (
    <section className="bg-panel py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="max-w-xl">
            <h3 className="mb-3 text-2xl font-semibold text-heading">
              Have any question about us?
            </h3>
            <p className="text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block shrink-0 rounded-[5px] bg-brand-pink px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-pink/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
