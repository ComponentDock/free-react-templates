import { User, Calendar, MessageCircle } from 'lucide-react'

const worldPosts = [
  {
    category: 'technology',
    categoryColor: 'bg-cat-tech',
    title: 'Keep Up with the Tech',
    author: 'Michael Smith',
    date: '29 April 2024',
    comments: 3,
    excerpt:
      'Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero.',
    image: 'https://picsum.photos/seed/bytepress-world1/600/400',
  },
  {
    category: 'technology',
    categoryColor: 'bg-cat-tech',
    title: 'Robotics and Automation',
    author: 'Michael Smith',
    date: '28 April 2024',
    comments: 4,
    excerpt:
      'Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero.',
    image: 'https://picsum.photos/seed/bytepress-world2/600/400',
  },
]

export function WorldSection() {
  return (
    <section className="bg-alt-bg py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ink">From the World</h2>
          <p className="text-sm text-secondary">Handpicked articles</p>
          <div className="mt-2 h-1 w-12 bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {worldPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white">
              <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <span
                  className={`inline-block rounded px-3 py-0.5 text-xs font-semibold uppercase text-white ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-accent">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    <MessageCircle size={12} />
                    {post.comments} comments
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
