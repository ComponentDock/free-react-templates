import { BLOG_POSTS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Blog"
          align="center"
          tone="primary"
          blurb="See our daily news & updates."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title}>
              <img src={post.image} alt="" className="mb-[30px] w-full object-cover" />
              <p className="text-sm text-meta">
                {post.date} · {post.category}
              </p>
              <h3 className="mt-2 text-xl text-black">{post.title}</h3>
              <p className="mt-2">{post.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#blog"
            className="inline-block rounded-none border-2 border-primary bg-primary px-10 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-primary"
          >
            View All Blog Posts
          </a>
        </div>
      </div>
    </section>
  )
}
