import { ArrowRight, Eye, Heart, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ARTICLES } from '../data'

/* Articles (source: section.ftco-section — "Articles" heading + intro
   paragraph and twelve alternating image/text article rows, each with a
   category tag, bold title, blurb, author line and meta counts). */
export function Articles() {
  return (
    <section id="articles" aria-label="Articles" className="px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 font-heading text-4xl font-bold text-ink">Articles</h2>
        <p className="mb-16 max-w-2xl leading-7 text-ink/70">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>

        <div className="space-y-24">
          {ARTICLES.map((article, index) => {
            const imageOnRight = index % 2 === 1
            return (
              <article key={article.seed} className="grid items-center gap-8 md:grid-cols-2">
                <a
                  href="#"
                  className={cn(
                    'block overflow-hidden rounded-md',
                    imageOnRight && 'md:order-last',
                  )}
                >
                  <img
                    src={`https://picsum.photos/seed/${article.seed}/600/400`}
                    alt={article.title}
                    loading="lazy"
                    className="h-[330px] w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
                <div className="pt-2">
                  <p className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">
                    {article.category}
                  </p>
                  <h3 className="mb-4 font-heading text-[28px] font-bold leading-tight text-ink">
                    <a href="#" className="transition-colors hover:text-accent">
                      {article.title}
                    </a>
                  </h3>
                  <p className="mb-4 leading-7 text-ink/70">{article.blurb}</p>
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src={`https://picsum.photos/seed/jotter-author-${index + 1}/80/80`}
                      alt=""
                      className="h-20 w-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-ink/60">
                        Written by <span className="font-medium text-ink">{article.author}</span>
                      </p>
                      <p className="text-sm text-ink/60">, {article.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-5 text-meta">
                      <span className="inline-flex items-center gap-1.5">
                        <Heart className="h-4 w-4" aria-hidden="true" /> {article.hearts}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Eye className="h-4 w-4" aria-hidden="true" /> {article.eyes}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" /> {article.comments}
                      </span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[13px] font-medium tracking-widest text-ink uppercase transition-colors hover:text-accent"
                    >
                      Continue Reading <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
