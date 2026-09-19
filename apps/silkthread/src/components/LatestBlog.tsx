import { Calendar } from 'lucide-react'

const posts = [
  {
    date: '16 February 2024',
    title: 'What Curling Irons Are The Best Ones',
    image: 'https://picsum.photos/seed/silkthread-blog1/600/400',
  },
  {
    date: '21 February 2024',
    title: 'Eternity Bands Do Last Forever',
    image: 'https://picsum.photos/seed/silkthread-blog2/600/400',
  },
  {
    date: '28 February 2024',
    title: 'The Health Benefits Of Sunglasses',
    image: 'https://picsum.photos/seed/silkthread-blog3/600/400',
  },
]

export function LatestBlog() {
  return (
    <section id="latest" className="spad" aria-label="Latest news">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
            Latest News
          </span>
          <h2 className="text-4xl font-bold text-ink">Fashion New Trends</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <span className="mb-2 flex items-center gap-1.5 text-xs text-body">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <h5 className="mb-2 text-lg font-bold text-ink">{post.title}</h5>
                <a
                  href="#"
                  className="text-sm font-bold uppercase tracking-wider text-ink underline underline-offset-4 hover:text-brand"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
