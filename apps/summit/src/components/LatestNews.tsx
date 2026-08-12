import { ArrowRight, Calendar, User } from 'lucide-react'
import { NEWS } from '../data'

/* Latest news recreated from the source's blog area: three white cards over
   the gradient overlay, each with a rounded thumbnail (hover zoom), a title
   link, a post-meta row and an excerpt. */

export function LatestNews() {
  return (
    <section id="blog" className="relative overflow-hidden py-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/summit-news/1920/1080)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-white">Our Blog</p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]">
            Latest News
          </h4>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {NEWS.map((post, i) => (
            <article key={post.title} className="group overflow-hidden rounded-[10px] bg-white">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/summit-news${i + 1}/600/400`}
                  alt=""
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-[30px] pb-[50px]">
                <h6 className="text-xl font-semibold text-navy-deep transition-colors hover:text-brand">
                  <a href="#blog" className="hover:text-brand">
                    {post.title}
                  </a>
                </h6>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" aria-hidden="true" />
                    {post.author}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:text-navy-deep"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
