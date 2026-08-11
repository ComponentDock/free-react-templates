import { Heart, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { categoryColors, continueReadingLabel, heroPost, hotNews, hotNewsTitle } from '../data'

/** Full-height hero slider: featured article on the left (category tag, bold
    headline, Continue Reading outline button) over a dark-overlay photo, and
    a HOT NEWS horizontally scrollable carousel of white mini-cards on the
    right (reference: .slider-main on the Quitelight preview). */
export function Hero() {
  return (
    <section
      aria-label="Featured post"
      className="relative flex min-h-[800px] items-center bg-ink text-white"
    >
      <img
        src={`https://picsum.photos/seed/${heroPost.seed}/1600/900`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="max-w-md">
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] ${categoryColors[heroPost.category]}`}
          >
            {heroPost.category}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{heroPost.title}</h1>
          <ButtonLink
            href="#main"
            variant="outline"
            className="mt-8 h-[45px] rounded-[2px] border-white/60 px-8 text-xs font-semibold tracking-[0.2em] text-white hover:border-brand hover:bg-brand hover:text-ink"
          >
            {continueReadingLabel}
          </ButtonLink>
        </div>
        <div>
          <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">
            {hotNewsTitle}
          </h2>
          <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4">
            {hotNews.map((item) => (
              <a
                key={item.seed}
                href="#hot-news"
                className="w-4/5 shrink-0 snap-center rounded-[2px] bg-white text-ink shadow-lg transition-shadow hover:shadow-xl lg:w-[calc(50%-0.5rem)]"
              >
                <img
                  src={`https://picsum.photos/seed/${item.seed}/300/150`}
                  alt=""
                  className="h-36 w-full rounded-t-[2px] object-cover"
                />
                <div className="p-4">
                  <p
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] ${categoryColors[item.category]}`}
                  >
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 text-sm font-bold leading-snug">{item.title}</h3>
                  <p className="mt-3 flex items-center gap-4 text-xs text-lt-black">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.comments}
                    </span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
