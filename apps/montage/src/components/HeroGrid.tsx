import { Play } from 'lucide-react'
import { defaultMeta, featuredTag, heroCards, heroImage, playLabel } from '../data'
import { PostMeta } from './PostMeta'

/* Masonry-style featured hero grid (reference `.hero-area`): one large card
   on the left with a play overlay, three split cards on the right, all on
   the light #EDF1F4 background. */
export function HeroGrid() {
  const featured = heroCards[0]!
  const rest = heroCards.slice(1)
  return (
    <section aria-label="Featured videos" className="bg-mist">
      <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
        <article className="relative w-full overflow-hidden lg:w-1/2">
          <img
            src={heroImage(featured)}
            alt={featured.title}
            className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[700px]"
          />
          <a
            href="#"
            aria-label={playLabel(featured.title)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-sm transition-colors hover:bg-brand">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
            </span>
          </a>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="mb-2 inline-block bg-brand px-2 py-1 font-display text-xs font-bold uppercase tracking-widest text-white">
              {featuredTag}
            </p>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              <a href="#" className="transition-colors hover:text-brand">
                {featured.title}
              </a>
            </h2>
            <div className="mt-3">
              <PostMeta meta={defaultMeta} onImage />
            </div>
          </div>
        </article>
        <div className="flex w-full flex-col gap-1.5 lg:w-1/2">
          {rest.map((card) => (
            <article key={card.title} className="relative flex-1 overflow-hidden">
              <img src={heroImage(card)} alt={card.title} className="h-full w-full object-cover" />
              <a
                href="#"
                aria-label={playLabel(card.title)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-sm transition-colors hover:bg-brand">
                  <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                </span>
              </a>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="mb-1 inline-block bg-brand px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-white">
                  {featuredTag}
                </p>
                <h3 className="font-display text-base font-bold text-white sm:text-lg">
                  <a href="#" className="transition-colors hover:text-brand">
                    {card.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
