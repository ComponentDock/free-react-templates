export function Intro() {
  return (
    <section id="brand" className="bg-white py-24 transition-colors lg:py-32 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="https://picsum.photos/seed/haute-intro/640/720"
            alt="Fashion editorial"
            className="w-full object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand">
            The Brand
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl dark:text-white">
            &ldquo;I firmly believe that with the right footwear one can rule the world.&rdquo;
          </h2>
          <p className="mt-6 leading-relaxed text-mist">
            Haute curates looks for people who treat every day like a runway. From statement
            tailoring to quiet essentials, we bring the latest collections together in one place —
            styled, edited, and ready to wear.
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-block border-2 border-ink px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:border-brand hover:text-brand dark:border-white dark:text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
