export function ChefsQuotes() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold text-ink">
              Chef&apos;s
              <br />
              Quotes
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Cooking is like love. It should be entered into with abandon or not at all. Every
              great dish begins with the finest ingredients and a passion for perfection that only
              comes from years of dedication to the craft.
            </p>
            <p className="mt-4 font-display text-lg font-semibold text-brand">
              — Marco Bellini, Head Chef
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/skyline-chef/600/500"
              alt="Head chef preparing a signature dish"
              loading="lazy"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
