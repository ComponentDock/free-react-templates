import { Calendar, User } from 'lucide-react'
import { featuredPosts } from '../data'

const pillClasses =
  'inline-block bg-pill px-6 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white'

/** Featured block below the header: one large photo post on the left and two
    smaller stacked posts on the right, dark charcoal background
    (reference: .featured on the Philosophy preview). */
export function FeaturedPosts() {
  const big = featuredPosts[0]!
  const small = featuredPosts.slice(1)

  return (
    <section aria-label="Featured posts" className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-5">
          <article className="group relative overflow-hidden lg:col-span-3">
            <img
              src="https://picsum.photos/seed/sonder-featured-1/800/1000"
              alt=""
              className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
              <span className={pillClasses}>{big.category}</span>
              <h2 className="mt-5 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
                {big.title}
              </h2>
              <p className="mt-5 flex items-center gap-4 text-xs text-white/70">
                <span className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[0.65rem] font-bold">
                    JD
                  </span>
                  <span>{big.author}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {big.date}
                </span>
              </p>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-2">
            {small.map((post) => (
              <article key={post.seed} className="group relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/800/500`}
                  alt=""
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className={pillClasses}>{post.category}</span>
                  <h3 className="mt-4 font-serif text-lg leading-snug sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex items-center gap-3 text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
