export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat py-32"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gala-cta/1920/600')" }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold uppercase tracking-wide md:text-5xl">
          Get Ticket Now!
        </h2>
        <a
          href="#"
          className="inline-block rounded-sm bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white opacity-90 transition-opacity hover:opacity-80"
        >
          Buy Ticket
        </a>
      </div>
    </section>
  )
}
