import { MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'The Art of Cinematic Color Grading',
    date: 'Sep 15, 2026',
    comments: 12,
    excerpt:
      'Discover how color grading can transform your footage and evoke powerful emotions in your audience.',
    image: 'https://picsum.photos/seed/reelcraft-blog1/600/400',
  },
  {
    title: 'Behind the Scenes: Our Latest Project',
    date: 'Sep 10, 2026',
    comments: 8,
    excerpt:
      'Take a look at what goes into producing a high-quality brand film from concept to delivery.',
    image: 'https://picsum.photos/seed/reelcraft-blog2/600/400',
  },
  {
    title: 'Essential Gear for Indie Filmmakers',
    date: 'Sep 5, 2026',
    comments: 15,
    excerpt:
      'Our curated list of must-have equipment that delivers professional results on a budget.',
    image: 'https://picsum.photos/seed/reelcraft-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Blog</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-gray-900">
            Blog Update
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-lg bg-gray-50">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
