export function Concept() {
  return (
    <section
      id="concept"
      className="relative flex min-h-[50vh] items-center justify-center bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/luminary-concept/1920/800')",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Our Concept</h2>
        <p className="mb-8 text-base text-white/80">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
        </p>
        <a
          href="#"
          className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-hover"
        >
          Get started
        </a>
      </div>
    </section>
  )
}
