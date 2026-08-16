import { Calendar, MessageCircle, User } from 'lucide-react'
import { blogPosts, sectionHeadings } from '../data'

export function Blog() {
  return (
    <section id="journal" aria-label="Blog" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase text-brand">
            {sectionHeadings.blogSub}
          </span>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-ink lg:text-[46px] lg:leading-[1.4]">
            {sectionHeadings.blogTitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-[0_10px_25px_-13px_rgba(0,0,0,0.1)]"
            >
              <a
                href="#journal"
                aria-label={`Read article: ${post.title}`}
                className="block h-[300px] bg-cover bg-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-[30px]">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-semibold uppercase tracking-wide text-muted">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-brand" aria-hidden="true" />
                    Admin
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                    Oct. 15, 2030
                  </span>
                  <a
                    href="#journal"
                    className="flex items-center gap-1.5 text-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />3 Comments
                  </a>
                </p>
                <h3 className="mt-3 text-2xl font-normal leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
