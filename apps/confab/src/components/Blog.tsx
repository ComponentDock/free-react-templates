import { BLOG_POSTS } from '../data'
import { SectionTitle } from './SectionTitle'

/* Blog — three article cards with photos, uppercase titles, authors and a
   read-more affordance. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="scroll-mt-20 bg-white py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle heading="Latest Articles" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-6 overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 font-display text-xl font-medium uppercase leading-snug text-night transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mb-3 text-sm text-mist">- {post.author}</p>
              <p className="mb-4 leading-[1.7] text-mist">{post.excerpt}</p>
              <a
                href="#blog"
                className="font-display text-sm font-medium uppercase tracking-wide text-brand underline-offset-4 hover:underline"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
