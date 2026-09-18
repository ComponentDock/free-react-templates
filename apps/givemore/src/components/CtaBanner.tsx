export function CtaBanner() {
  return (
    <section
      className="relative flex items-center bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/givemore-cta/1400/500)' }}
    >
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold leading-snug text-white md:text-4xl">
          Forget what you can get and see what you can give
        </h2>
        <a
          href="#volunteers"
          className="mt-6 inline-block rounded bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
        >
          Become a Volunteer
        </a>
      </div>
    </section>
  )
}
