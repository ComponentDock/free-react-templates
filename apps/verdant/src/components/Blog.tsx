import { Clock, User } from 'lucide-react'

const posts = [
  {
    title: 'Garden designers across the country forecast ideas shaping the gardening world',
    date: '20 Jun 2018',
    author: 'Alan Jackson',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.',
    seed: 'verdant-b1',
  },
  {
    title: 'Resilient Plants for a Lasting Landscape',
    date: '20 Jun 2018',
    author: 'Christina Aguilera',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.',
    seed: 'verdant-b2',
  },
  {
    title: "The summer coming up, it's time for both us and the flowers to soak up the sunshine",
    date: '19 Jun 2018',
    author: 'Mason Jenkins',
    excerpt:
      'Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.',
    seed: 'verdant-b3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-ink">LATEST NEWS</h2>
          <p className="text-mist">The breaking news about Gardening &amp; House plants</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/400/250`}
                  alt={post.title}
                  className="w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h5 className="mb-2 font-semibold text-ink transition-colors group-hover:text-brand">
                <a href="#">{post.title}</a>
              </h5>
              <div className="mb-3 flex gap-4 text-xs text-mist">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} /> {post.author}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-mist">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
