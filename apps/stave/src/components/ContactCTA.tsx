export function ContactCTA() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-heading">Contact For RSVP</h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-body">
          Have questions or want to book? Reach out and we&apos;ll get back to you as soon as
          possible.
        </p>
        <a
          href="mailto:hello@stave.com"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
