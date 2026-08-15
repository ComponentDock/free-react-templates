import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-normal text-ink">Wine's Blog</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/60">
            Notes from the cellar — harvest stories, pairings, and tasting guides.
          </p>
          <a
            href="#wines"
            className="mt-6 inline-flex items-center gap-2 font-serif text-sm font-bold uppercase tracking-widest text-brand transition-opacity hover:opacity-70"
          >
            View All Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} data-post className="group">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
              <p className="mt-4 text-xs text-ink/50">
                {post.author} in <span className="font-semibold text-brand">{post.category}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
