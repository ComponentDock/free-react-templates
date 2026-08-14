import { Heart } from 'lucide-react'
import { blogIntro, blogPosts } from '../data'

/** Recent-blog section on the #f9f9ff band: three post cards with a thumb,
 *  an author row (avatar + name + heart/comment meta), a bold title, an
 *  excerpt and a "View More" button. */
export function BlogSection() {
  return (
    <section id="blog" aria-label="Blog" className="bg-band py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold uppercase text-ink lg:text-4xl">
            {blogIntro.heading}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted">{blogIntro.lead}</p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                width={600}
                height={360}
                className="h-auto w-full object-cover"
              />
              <div className="px-6 pb-8 pt-6">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-band">
                    <img
                      src="https://picsum.photos/seed/solo-author/32/32"
                      alt={`Avatar of ${post.author}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.meta}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium leading-snug text-ink transition-colors hover:text-primary">
                  <a href="#blog">{post.title}</a>
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-5 inline-block text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-primary"
                >
                  {blogIntro.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
