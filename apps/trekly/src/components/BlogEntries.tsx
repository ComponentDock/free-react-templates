import { MessageCircle } from 'lucide-react'

const entries = [
  {
    image: 'https://picsum.photos/seed/trekly-blog-1/600/400',
    day: '12',
    month: 'April',
    year: '2024',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'Admin',
    comments: 3,
  },
  {
    image: 'https://picsum.photos/seed/trekly-blog-2/600/400',
    day: '15',
    month: 'May',
    year: '2024',
    title: 'Top 10 Travel Destinations for 2024',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'Admin',
    comments: 5,
  },
  {
    image: 'https://picsum.photos/seed/trekly-blog-3/600/400',
    day: '20',
    month: 'June',
    year: '2024',
    title: 'How to Plan Your Perfect Vacation',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'Admin',
    comments: 2,
  },
]

export function BlogEntries() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-600">
            Blog
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Blog</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="h-52 w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ocean-600 text-lg font-bold text-white">
                    {entry.day}
                  </span>
                  <div className="text-xs leading-tight text-white">
                    <div className="font-semibold">{entry.year}</div>
                    <div>{entry.month}</div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900 transition group-hover:text-ocean-600">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{entry.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#blog"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ocean-600 transition hover:text-ocean-500"
                  >
                    Read More →
                  </a>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{entry.author}</span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      {entry.comments}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
