import { MessageSquare } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/* Blog — light section, three blog-entry cards: image, date block
   (day/month/year), title link, paragraph, meta row (Read More, author,
   comment count). */
export function BlogSection() {
  return (
    <section id="blog-section" aria-label="Blog" className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">Blog</span>
          <h2 className="mt-2 text-4xl font-bold text-black">Our Blog</h2>
          <p className="mt-4 text-black/70">
            Latest tips, stories and workouts from the club — straight from the gym floor.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative">
                <img src={post.image} alt="" className="h-56 w-full object-cover" />
                <div className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-center shadow">
                  <span className="block text-xl font-black leading-none text-brand">
                    {post.day}
                  </span>
                  <span className="mt-1 block text-[10px] font-bold uppercase leading-none text-black/60">
                    {post.month} {post.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-black">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{post.text}</p>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-[13px]">
                  <a href="#" className="font-bold text-brand transition-colors hover:text-black">
                    Read More
                  </a>
                  <span className="text-black/50">Admin</span>
                  <span className="inline-flex items-center gap-1 text-black/50">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
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
