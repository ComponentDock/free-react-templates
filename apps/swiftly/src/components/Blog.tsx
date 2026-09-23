import { ArrowRight } from 'lucide-react'

const posts = [
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    image: 'https://picsum.photos/seed/swiftly-blog1/400/250',
  },
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    image: 'https://picsum.photos/seed/swiftly-blog2/400/250',
  },
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    image: 'https://picsum.photos/seed/swiftly-blog3/400/250',
  },
  {
    date: 'May 14, 2020',
    title: 'Far far away, behind the word mountains',
    excerpt: 'Vokalia and Consonantia, there live the blind texts. Separated they live.',
    image: 'https://picsum.photos/seed/swiftly-blog4/400/250',
  },
]

export function Blog() {
  return (
    <section className="bg-surface py-20" id="blog">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-brand">
            Blog
          </span>
          <h2 className="text-3xl font-bold">Blog Posts</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <article key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
                role="img"
                aria-label={post.title}
              />
              <div className="p-5">
                <time className="mb-2 block text-xs text-brand">{post.date}</time>
                <h3 className="mb-2 text-base font-bold leading-snug">
                  <a href="#" className="hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-sm text-mist">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
