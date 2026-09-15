import { Calendar, MessageCircle } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/* Blog section: 3 white cards with image, title, date, and comment count. */

export function Blog() {
  return (
    <section id="blog" className="bg-white py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Blog
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-[#242424] md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Latest News
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <article key={post.title} className="group overflow-hidden rounded-[10px] bg-[#f7f7f7]">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/conclave-blog${i + 1}/600/400`}
                  alt=""
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-[30px]">
                <h3
                  className="text-lg font-bold uppercase tracking-wide text-[#242424] transition-colors hover:text-[#3b1d82]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <a href="#blog">{post.title}</a>
                </h3>
                <div className="mt-4 flex items-center gap-5 text-sm text-[#797979]">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {post.comments} Comments
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
