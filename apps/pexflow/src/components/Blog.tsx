import { MessageSquare, Heart } from 'lucide-react'

const posts = [
  {
    title: 'Modern Construction Trends in 2025',
    image: 'https://picsum.photos/seed/pexflow-blog1/400/250',
    comments: 12,
    likes: 48,
  },
  {
    title: 'Sustainable Building Materials Guide',
    image: 'https://picsum.photos/seed/pexflow-blog2/400/250',
    comments: 8,
    likes: 35,
  },
  {
    title: 'Engineering Excellence: Our Latest Project',
    image: 'https://picsum.photos/seed/pexflow-blog3/400/250',
    comments: 15,
    likes: 62,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-alt-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">Latest News</p>
          <h2 className="text-3xl font-bold text-heading">Recent News</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map(({ title, image, comments, likes }) => (
            <article key={title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={image} alt={title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" /> {comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" aria-hidden="true" /> {likes}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-heading">{title}</h3>
                <a
                  href="#blog"
                  className="mt-3 inline-block text-sm font-bold text-brand hover:underline"
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
