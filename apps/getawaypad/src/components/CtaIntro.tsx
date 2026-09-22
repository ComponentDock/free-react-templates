export function CtaIntro() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/getawaypad-cta/1920/600')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Ready to get started</h2>
        <p className="mb-6 text-white/90">
          It&apos;s safe to book online with us! Get your dream stay in clicks or drop us a line
          with your questions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-block rounded bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[3px] text-white hover:bg-brand-dark transition-colors"
          >
            Book now
          </a>
          <a
            href="#"
            className="inline-block rounded border-2 border-white px-6 py-3 text-xs font-semibold uppercase tracking-[3px] text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}
