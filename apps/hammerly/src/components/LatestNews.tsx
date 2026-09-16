const posts = [
  {
    title: 'Building the Future',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum fugiat nostrum.',
    date: 'Sep 10, 2025',
    seed: 'hammerly-blog-1',
  },
  {
    title: 'Modern Architecture Trends',
    excerpt: 'Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam.',
    date: 'Sep 08, 2025',
    seed: 'hammerly-blog-2',
  },
  {
    title: 'Sustainable Construction',
    excerpt: 'Rem possimus distinctio ex obcaecati mollitia quibusdam temporibus culpa dolore.',
    date: 'Sep 05, 2025',
    seed: 'hammerly-blog-3',
  },
] as const

export function LatestNews() {
  return (
    <section id="blog" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 border-l-4 border-brand pl-4">
          <h2 className="font-section text-3xl font-bold uppercase md:text-4xl">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/400`}
                alt={p.title}
                className="h-48 w-full object-cover"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="p-6">
                <span className="mb-2 block text-xs text-body">{p.date}</span>
                <h3 className="mb-2 font-heading text-lg font-bold text-ink">{p.title}</h3>
                <p className="text-sm text-body">{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
