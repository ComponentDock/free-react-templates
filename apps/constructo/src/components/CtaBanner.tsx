export function CtaBanner() {
  return (
    <section className="bg-accent py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div>
          <h3 className="mb-2 font-heading text-xl font-bold uppercase text-heading">
            Book now to build your dream home
          </h3>
          <p className="text-sm text-heading/70">
            Contact us today for a free consultation and estimate on your next project.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 border-2 border-heading bg-heading px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-transparent hover:text-heading"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
