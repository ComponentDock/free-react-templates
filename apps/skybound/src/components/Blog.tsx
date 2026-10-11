import { Calendar, Heart, MessageCircle } from 'lucide-react'
import { BLOG } from '../data/content'

export function Blog() {
  return (
    <section id="blog" className="relative section-gap bg-white">
      <div aria-hidden="true" className="blog-band" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="section-title text-left">
          {BLOG.titleFirst}
          <br />
          {BLOG.titleSecond}
        </h1>
        <p className="mb-14 max-w-xl">{BLOG.text}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {BLOG.posts.map((post) => (
            <article key={post.src} className="info-card">
              <div className="sheen">
                <img src={post.src} alt={post.alt} className="h-[220px] w-full object-cover" />
              </div>
              <div className="p-[25px]">
                <div className="mb-3 flex flex-wrap gap-4 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <Calendar aria-hidden="true" className="h-4 w-4" />
                    {BLOG.meta.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart aria-hidden="true" className="h-4 w-4" />
                    {BLOG.meta.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    {BLOG.meta.comments}
                  </span>
                </div>
                <h5 className="mb-3 text-lg">{post.title}</h5>
                <p>{post.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
