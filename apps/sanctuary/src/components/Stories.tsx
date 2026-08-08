const stories = [
  {
    quote:
      'When we walked through the doors, we immediately felt welcomed. This church has become our family, and our kids love coming every week.',
    name: 'The Martinez Family',
  },
  {
    quote:
      'I was skeptical about church, but Grace Community changed my perspective. The teaching is relevant and the people are genuine.',
    name: 'Michael Chen',
  },
  {
    quote:
      "Being part of a small group here has helped me grow in my faith more than anything else. I've found true community and lifelong friends.",
    name: 'Jennifer Wilson',
  },
] as const

export function Stories() {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-primary-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Stories of Faith
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hear from members of our church family
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <figure key={story.name} className="rounded-2xl bg-white p-8 dark:bg-gray-800">
              <blockquote className="leading-relaxed text-gray-600 dark:text-gray-400">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/sanctuary-${index + 7}/100/100`}
                  alt={`${story.name} portrait`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-serif font-semibold text-gray-900 dark:text-white">
                    {story.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Church Member</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
