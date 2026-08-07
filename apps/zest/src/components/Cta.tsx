export function Cta() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-950" aria-label="Call to action">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          CREATE YOUR OWN WEBSITE TODAY !
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
          Zest gives you a complete, responsive app landing page out of the box — pick a layout,
          drop in your content, and ship.
        </p>
        <a
          href="#home"
          className="mt-9 inline-block bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          Purchase Now
        </a>
      </div>
    </section>
  )
}
