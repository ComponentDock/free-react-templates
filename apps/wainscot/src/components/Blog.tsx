import { MessageCircle, ThumbsUp } from 'lucide-react'
import { blogPosts, blogSubtext, blogTitle } from '../data'

export function Blog() {
  return (
    <section id="blog-section" className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-[34px] font-light text-ink">{blogTitle}</h2>
          <p className="mt-4 text-[15px] leading-7 text-body">{blogSubtext}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-wide text-body">{post.date}</p>
              <h3 className="mt-2 text-base font-medium leading-6 text-ink">
                <a href="#blog-section" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-body">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-5 text-[13px] text-body">
                <span className="inline-flex items-center gap-1.5">
                  <ThumbsUp aria-hidden="true" className="h-4 w-4 text-brand" />
                  {post.likes}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand" />
                  {post.comments}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
