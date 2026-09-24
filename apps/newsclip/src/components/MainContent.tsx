import { Clock, MessageCircle } from 'lucide-react'
import {
  breakingNewsCards,
  dontMissPosts,
  featuredExcerpt,
  featuredPost,
  popularPosts,
} from '../data'

function PostMeta({ date, comments }: { date: string; comments?: number }) {
  return (
    <span className="flex items-center gap-2 text-xs text-meta">
      <Clock className="h-3 w-3" aria-hidden="true" />
      <time>{date}</time>
      {comments !== undefined && (
        <>
          <MessageCircle className="h-3 w-3" aria-hidden="true" />
          <span>{comments}</span>
        </>
      )}
    </span>
  )
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-3" aria-label="Share this article">
      {[
        {
          label: 'Facebook',
          path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
        },
        {
          label: 'Twitter',
          path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
        },
        {
          label: 'Instagram',
          path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01',
        },
      ].map((icon) => (
        <a
          key={icon.label}
          href={`#${icon.label.toLowerCase()}`}
          aria-label={icon.label}
          className="text-brand transition-opacity hover:opacity-70"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}

export function MainContent() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left column (9 cols) */}
        <div className="lg:col-span-9">
          {/* Featured post */}
          <article className="mb-10">
            <div className="relative mb-4 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${featuredPost.seed}/900/500`}
                alt=""
                className="h-[400px] w-full object-cover"
              />
              <span className="absolute left-4 top-4 bg-brand px-2 py-0.5 text-xs font-bold uppercase text-white">
                {featuredPost.category}
              </span>
            </div>
            <PostMeta date={featuredPost.date} comments={featuredPost.comments} />
            <h2 className="my-2 font-serif text-2xl font-bold text-ink">{featuredPost.title}</h2>
            <p className="mb-4 text-sm leading-relaxed text-meta">{featuredExcerpt}</p>
            <div className="flex items-center gap-4">
              <a
                href="#continue"
                className="text-sm font-medium uppercase tracking-wider text-brand transition-opacity hover:opacity-70"
              >
                Continue Reading →
              </a>
              <SocialIcons />
            </div>
          </article>

          {/* Today's Most Popular */}
          <div>
            <h3 className="mb-6 border-b-2 border-brand pb-3 font-serif text-xl font-bold text-ink">
              Today&apos;s Most Popular
            </h3>
            <div className="space-y-6">
              {popularPosts.map((post) => (
                <article key={post.seed} className="flex gap-5">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/280/200`}
                    alt=""
                    className="h-[160px] w-[280px] shrink-0 object-cover"
                  />
                  <div>
                    <PostMeta date={post.date} comments={post.comments} />
                    <h4 className="my-1 font-serif text-lg font-bold leading-snug text-ink">
                      {post.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-meta">
                      Far far away, behind the word mountains, far from the countries Vokalia and
                      Consonantia, there live the blind texts. Separated they live in
                      Bookmarksgrove.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar (3 cols) */}
        <aside className="mt-10 space-y-8 lg:col-span-3 lg:mt-0">
          {/* Breaking News */}
          <div>
            <h3 className="mb-4 border-b-2 border-brand pb-3 font-serif text-xl font-bold text-ink">
              Breaking News
            </h3>
            <div className="space-y-4">
              {breakingNewsCards.map((item) => (
                <article
                  key={item.seed}
                  className="group relative h-[180px] cursor-pointer overflow-hidden"
                >
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/400/180`}
                    alt=""
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h4 className="absolute bottom-3 left-3 right-3 font-serif text-sm font-bold leading-snug text-white">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>
          </div>

          {/* Don't Miss */}
          <div>
            <h3 className="mb-4 border-b-2 border-brand pb-3 font-serif text-xl font-bold text-ink">
              Don&apos;t Miss
            </h3>
            <div className="space-y-4">
              {dontMissPosts.map((post) => (
                <article key={post.seed} className="flex gap-3">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/80/80`}
                    alt=""
                    className="h-20 w-20 shrink-0 object-cover"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold leading-snug text-ink">
                      {post.title}
                    </h4>
                    <PostMeta date={post.date} comments={post.comments} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div className="bg-dark-bg p-6 text-white">
            <h3 className="mb-2 font-serif text-lg font-bold">Subscribe</h3>
            <p className="mb-4 text-sm text-white/70">
              Get the latest news delivered straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Your email address"
                className="border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  )
}
