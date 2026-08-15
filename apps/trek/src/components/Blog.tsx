import { blogBackdrop, blogLabel, blogPosts, blogTitle } from '../data'
import { SectionHeading } from './SectionHeading'

export function Blog() {
  return (
    <section aria-label={blogTitle} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading backdrop={blogBackdrop} label={blogLabel} title={blogTitle} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title}>
              <a href="#blog-section" className="block">
                <img src={post.image} alt="" className="w-full" />
              </a>
              <div className="bg-white p-5">
                <h3 className="mb-5 text-[22px] font-semibold leading-snug text-ink">
                  <a href="#blog-section" className="text-ink transition-colors hover:text-sand">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-[13px] uppercase tracking-[0.1em] text-meta">{post.meta}</p>
                <p className="leading-[1.7] text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
