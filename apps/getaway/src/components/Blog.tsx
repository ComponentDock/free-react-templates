const posts = [
  {
    day: '21',
    month: 'August',
    year: '2019',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'getaway-b1',
  },
  {
    day: '21',
    month: 'August',
    year: '2019',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'getaway-b2',
  },
  {
    day: '21',
    month: 'August',
    year: '2019',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'getaway-b3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Recent Post
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map(({ day, month, year, title, excerpt, seed }) => (
            <article
              key={seed}
              className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/400/250`}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-12 w-12 flex-col items-center justify-center rounded bg-sunset-700 text-white">
                    <span className="text-xs font-bold leading-none">{day}</span>
                  </span>
                  <div className="text-sm text-gray-500">
                    <span>{year}</span>
                    <br />
                    <span className="font-medium text-gray-700">{month}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
