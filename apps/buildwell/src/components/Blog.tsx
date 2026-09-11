import { Calendar, User } from 'lucide-react'

const posts = [
  {
    title: 'Blog Post Title',
    image: 'https://picsum.photos/seed/buildwell-blog1/600/400',
    date: '20 Jan 2026',
    author: 'Admin',
    excerpt:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.',
  },
  {
    title: 'Blog Post Title',
    image: 'https://picsum.photos/seed/buildwell-blog2/600/400',
    date: '18 Jan 2026',
    author: 'Admin',
    excerpt:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
  },
  {
    title: 'Blog Post Title',
    image: 'https://picsum.photos/seed/buildwell-blog3/600/400',
    date: '15 Jan 2026',
    author: 'Admin',
    excerpt:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Subtitle</p>
          <h2 className="mt-2 text-3xl font-bold text-heading">Latest News</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-muted bg-white transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" /> {post.author}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-heading">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
