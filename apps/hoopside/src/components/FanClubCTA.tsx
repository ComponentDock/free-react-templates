export function FanClubCTA() {
  return (
    <section className="relative bg-dark-bg py-24 text-white">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/hoopside-cta/1920/600')] bg-cover bg-center bg-fixed opacity-20" />
      <div className="relative z-10 container mx-auto">
        <div className="max-w-lg">
          <p className="mb-2 font-heading text-sm uppercase tracking-widest text-primary">
            Join Our Team
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold uppercase leading-tight md:text-4xl">
            Join Our Fan Club and Get Free Tickets
          </h2>
          <a
            href="#register"
            className="inline-block rounded-full bg-white px-8 py-3 font-heading text-sm uppercase tracking-wide text-dark-bg transition-colors hover:bg-gray-200"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  )
}
