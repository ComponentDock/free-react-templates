import { ArrowRight, CalendarDays } from 'lucide-react'
import { posts } from '../data'

/* Recent-blog grid: four cards with a photo, date + comments meta,
   title, excerpt and a red read-more link. */
export function Blog() {
  return (
    <section id="news" aria-label="Recent blog posts" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Our Blog
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
            Recent Blog
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-400">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {post.date} {post.comments} Comments
                </p>
                <h3 className="mt-3 font-display text-[22px] font-semibold leading-snug text-heading transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
                <a
                  href="#news"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-primary transition-colors hover:text-blue"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
