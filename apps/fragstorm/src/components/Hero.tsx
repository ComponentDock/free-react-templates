import { Clock, MessageCircle } from 'lucide-react'
import { HERO_ARTICLE, TRENDING_POSTS } from '../data'

/* Hero recreated from the source template's hero-section: split layout
   with featured article on the left (tag badge + headline + author meta)
   and trending posts sidebar on the right. */

export function Hero() {
  return (
    <section id="home" className="bg-body-bg py-12" aria-label="Featured article">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Featured article */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-text-primary">
                {HERO_ARTICLE.tag}
              </span>
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-5xl">
              {HERO_ARTICLE.headline}
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-nav-hover">
                <img
                  src={`https://picsum.photos/seed/fragstorm-author/80/80`}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">by {HERO_ARTICLE.author}</p>
                <p className="text-xs text-text-muted">{HERO_ARTICLE.date}</p>
              </div>
            </div>
          </div>

          {/* Trending sidebar */}
          <aside aria-label="Trending posts">
            <h2 className="section-title mb-4 font-heading text-lg font-bold uppercase italic tracking-widest text-text-primary">
              <span className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-4 before:w-2.5 before:-skew-x-[15deg] before:bg-brand before:content-['']">
                Trending Posts
              </span>
            </h2>
            <div className="space-y-4">
              {TRENDING_POSTS.map((post) => (
                <article key={post.title} className="flex gap-3">
                  <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded bg-nav-hover">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold leading-snug text-text-primary">
                      <a href="#" className="transition-colors hover:text-brand">
                        {post.title}
                      </a>
                    </h3>
                    <div className="mt-1.5 flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" aria-hidden="true" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
