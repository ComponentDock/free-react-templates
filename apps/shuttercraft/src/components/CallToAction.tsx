export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-brand to-brand-green py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <h2 className="text-2xl font-bold uppercase text-white md:text-3xl">
          Let&apos;s Work Together
        </h2>
        <a
          href="#contact"
          className="rounded-full border-2 border-white px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
