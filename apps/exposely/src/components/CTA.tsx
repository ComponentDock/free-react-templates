export function CTA() {
  return (
    <section className="relative overflow-hidden bg-light-bg px-6 py-32">
      <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-gray-200/60 select-none md:text-[18rem]">
        Dream
      </span>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          I am an experienced photographer
        </h2>
        <h5 className="mb-8 text-lg text-gray-500">Let&apos;s talk</h5>
        <a
          href="#contact"
          className="inline-flex min-w-[180px] items-center justify-center border-2 border-secondary-dark bg-transparent px-8 text-sm font-medium uppercase tracking-wider text-secondary-dark transition-colors hover:bg-secondary-dark hover:text-white"
          style={{ height: '56px' }}
        >
          Contact me
        </a>
      </div>
    </section>
  )
}
