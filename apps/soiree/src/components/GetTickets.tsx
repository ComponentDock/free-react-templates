export function GetTickets() {
  return (
    <section
      id="tickets"
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/soiree-tickets/1600/500')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 font-[family-name:var(--font-montserrat)]">
        <h3 className="text-3xl font-bold uppercase text-white mb-6">Get your tickets</h3>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-white/80 md:w-2/3 leading-relaxed">
            Don't miss out on the most exciting event of the year. Join thousands of professionals
            for three days of inspiration, learning, and connection. Early bird pricing available
            for a limited time.
          </p>
          <div className="md:w-1/3 text-center md:text-right">
            <a
              href="#"
              className="inline-block bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
