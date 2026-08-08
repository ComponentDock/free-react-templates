const stories = [
  {
    quote:
      'We visited Congregate during a really hard season in our lives. From the first moment, we felt like family. This church has helped us heal and grow in ways we never expected.',
    author: 'The Martinez Family',
    meta: 'Members since 2019',
    seed: 'congregate-6',
  },
  {
    quote:
      "I wasn't sure what I believed about God, but the people here welcomed my questions without judgment. Congregate gave me space to explore faith at my own pace.",
    author: 'James K.',
    meta: 'Member since 2022',
    seed: 'congregate-7',
  },
  {
    quote: 'The kids program here is incredible. My daughter actually asks to come to church.',
    author: 'Michelle T.',
    meta: 'Member since 2021',
    seed: 'congregate-8',
  },
] as const

export function Stories() {
  return (
    <section className="bg-charcoal-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Stories</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Real People. Real Hope.</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <figure key={story.author} className="rounded-lg bg-charcoal-800 p-6">
              <blockquote className="text-sm leading-relaxed text-charcoal-200">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${story.seed}/200/200`}
                  alt={story.author}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-semibold text-white">{story.author}</span>
                  <span className="block text-xs text-charcoal-400">{story.meta}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
