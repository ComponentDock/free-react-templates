import { Calendar, Heart, MessageCircle } from 'lucide-react'
import { posts } from '../data'

export function Blog() {
  return (
    <section id="blog" aria-label="Recent blog posts" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-thin text-ink md:text-5xl">Our Recent Blogs</h1>
          <p className="mt-5 leading-relaxed text-muted">
            Notes on practice, recovery, and building a routine that lasts.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group bg-white shadow-sm">
              <img src={post.image} alt="" loading="lazy" className="h-52 w-full object-cover" />
              <div className="p-7">
                <h2 className="text-lg font-medium leading-snug text-ink transition-colors group-hover:text-brand">
                  <a href="#blog">{post.title}</a>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-5 border-t border-gray-100 pt-4 text-xs uppercase tracking-wider text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    {post.likes}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
