const posts = [
  {
    image: 'https://picsum.photos/seed/trowel-blog1/600/400',
    title: 'Modern Construction Trends',
    date: 'Sep 10, 2026',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/trowel-blog2/600/400',
    title: 'Sustainable Building Materials',
    date: 'Sep 05, 2026',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: 'https://picsum.photos/seed/trowel-blog3/600/400',
    title: 'Smart Home Construction',
    date: 'Aug 28, 2026',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-500">
            Latest News
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Recent Blog Posts</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ image, title, date, excerpt }) => (
            <article key={title} className="overflow-hidden bg-white shadow-sm">
              <img src={image} alt={title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="mb-2 text-xs text-gray-500">{date}</p>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
