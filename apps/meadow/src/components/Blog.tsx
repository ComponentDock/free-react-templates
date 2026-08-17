import { Calendar, Link2, MessageCircle, User } from 'lucide-react'
import { blogAuthor, blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-brand">
            Our Blog
          </span>
          <h2 className="mt-2 text-4xl font-medium text-ink">Recent From Blog</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-md bg-white shadow-md">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <p className="flex items-center gap-2 text-[13px] text-body">
                  <User aria-hidden="true" className="h-4 w-4 text-brand" />
                  <Calendar aria-hidden="true" className="h-4 w-4 text-brand" />
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand" />
                  {`${blogAuthor} · ${post.date} · ${post.comments}`}
                </p>
                <h3 className="mt-3 text-xl font-medium leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{post.snippet}</p>
                <a
                  href="#blog"
                  aria-label="Read article"
                  className="mt-5 inline-flex h-[30px] w-[30px] items-center justify-center rounded-md bg-mint text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  <Link2 aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
