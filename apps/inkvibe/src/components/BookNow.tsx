export function BookNow() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/inkvibe-booknow/1200/400"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Book Your Session
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Ready to get inked? Schedule a consultation with one of our artists and start your tattoo
          journey today.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded bg-primary-400 px-8 py-3 text-sm font-bold text-void transition-colors hover:bg-primary-500"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
