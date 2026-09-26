export function Cta() {
  return (
    <section className="bg-primary py-20 text-center" data-testid="cta">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Do You Want To Be A Model?
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Join our agency and take your modeling career to the next level. We are always looking for
          fresh talent.
        </p>
        <a
          href="#contact"
          className="inline-block rounded bg-white px-10 py-3 text-sm font-bold uppercase text-heading transition hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
