export function CTA() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Want To Work
          <br />
          With Us? Hit The Button.
        </h2>
        <a
          href="#contact"
          className="inline-block border-2 border-white bg-white px-8 py-5 font-display text-xl font-medium text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Let&apos;s Work Together
        </a>
      </div>
    </section>
  )
}
