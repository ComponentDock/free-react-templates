import { Calendar, ChevronRight, MessageCircle, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { imgUrl, posts, viewAllArticlesLabel } from '../data'

/** Six full-width alternating article rows — white with the image on the
    LEFT, ink #313b44 with the image on the RIGHT — plus a centered "View
    all articles" link (reference: .blog-wrap rows). */
export function BlogList() {
  return (
    <section aria-label="Articles" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {posts.map((post, index) => {
          const dark = index % 2 === 1
          return (
            <article
              key={post.title}
              className={cn(
                'mb-20 grid overflow-hidden md:grid-cols-2',
                dark ? 'bg-ink' : 'bg-white',
              )}
            >
              <div className={cn('relative', dark && 'md:order-last')}>
                <img
                  src={imgUrl(post.seed, 800, 600)}
                  alt={post.title}
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className={cn('px-4 py-10 md:px-10', dark ? 'text-white/50' : 'text-[#212529]')}>
                <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-accent">
                  <Calendar className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
                  <span className="mr-3">{post.date}</span>
                  <User className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
                  <span className="mr-3">{post.author}</span>
                  <MessageCircle className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
                  <span>{post.comments}</span>
                </p>
                <h2 className="mb-6 text-3xl font-extrabold leading-tight text-ink md:text-[45px]">
                  <a
                    href="#top"
                    className={cn(
                      'transition-colors hover:text-accent',
                      dark ? 'text-white' : 'text-ink',
                    )}
                  >
                    {post.title}
                  </a>
                </h2>
                <div className="flex items-center gap-3">
                  <img
                    src={imgUrl(post.avatar, 60, 60)}
                    alt={post.author}
                    className="h-[60px] w-[60px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className={cn('text-base font-bold', dark ? 'text-white' : 'text-ink')}>
                      {post.author}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-accent">
                      {post.role}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        <div className="py-10 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-2xl font-medium text-ink transition-colors hover:text-accent"
          >
            {viewAllArticlesLabel}
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
