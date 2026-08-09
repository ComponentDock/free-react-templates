const quotes = [
  {
    text: 'The best fade I have ever had, hands down. Slick listens to what you want and then makes it look even better than you imagined.',
    author: 'Wilma Mumduya',
  },
  {
    text: 'I came in for a beard trim and left with a whole new look. The hot-towel shave alone is worth the visit.',
    author: 'Jimmy Changa',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Word of Mouth
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-ink dark:text-white sm:text-4xl">
            Customers Say About Us
          </h2>
        </div>
        <div className="mt-12 space-y-6">
          {quotes.map((quote) => (
            <figure
              key={quote.author}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <blockquote className="text-base leading-relaxed text-mist dark:text-gray-300">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                  {quote.author
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-ink dark:text-white">
                  {quote.author}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
