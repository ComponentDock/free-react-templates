export function BrideGroom() {
  return (
    <section className="bg-mist-50 py-16 transition-colors dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-500 sm:text-6xl">
          Bride &amp; Groom
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <article className="text-center">
            <img
              src="https://picsum.photos/seed/nuptial-3/600/700"
              alt="Francisco Fredricksen, the groom"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
              loading="lazy"
            />
            <h3 className="mt-6 text-2xl font-semibold text-ink-900 dark:text-white">
              Francisco Fredricksen
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-700 dark:text-stone-300">
              The man of the hour — a storyteller with a kind heart who turns every quiet moment
              into an adventure worth remembering.
            </p>
          </article>
          <article className="text-center">
            <img
              src="https://picsum.photos/seed/nuptial-4/600/700"
              alt="Laura Moorey, the bride"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
              loading="lazy"
            />
            <h3 className="mt-6 text-2xl font-semibold text-ink-900 dark:text-white">
              Laura Moorey
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-700 dark:text-stone-300">
              The love of his life — an artist at heart whose smile lights up every room she walks
              into.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
