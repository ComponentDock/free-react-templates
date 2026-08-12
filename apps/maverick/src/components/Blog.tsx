import { MessageSquare } from 'lucide-react'
import { BLOG_POSTS, SERVICES_BLURB } from '../data'

/* Blog section recreated from the ColorLib "Clark" blog: three article
   cards, each with a 350px image, a meta row (date · author · comment
   count), a 20px white title link (amber on hover) and a lorem excerpt. */

export function Blog() {
  return (
    <section id="blog-section" className="bg-black py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">
            Our Blog
          </p>
          <h2 className="text-[50px] font-bold text-white">Our Blog</h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] text-muted">{SERVICES_BLURB}</p>
        </div>

        <div className="grid gap-[30px] lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.image} className="group">
              <a href="#blog-section" className="block overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <div className="mt-5">
                <p className="flex items-center gap-3 text-[14px] text-faint">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <a href="#blog-section" className="transition-colors hover:text-brand">
                    {post.author}
                  </a>
                  <span aria-hidden="true">·</span>
                  <a
                    href="#blog-section"
                    className="inline-flex items-center gap-1 transition-colors hover:text-brand"
                  >
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </a>
                </p>
                <h3 className="mt-3 text-[20px] font-semibold leading-snug">
                  <a href="#blog-section" className="text-white transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-[16px] text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
