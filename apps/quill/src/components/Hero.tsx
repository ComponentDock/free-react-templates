import { Heart, MessageCircle } from 'lucide-react'
import { hero } from '../data'

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="brand-gradient absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-28 pt-36 text-center sm:px-6">
        <h1 className="font-sans text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {hero.headline}
        </h1>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/20 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-white sm:flex-row sm:px-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4" aria-hidden="true" />
              {hero.likes} Likes
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {hero.comments} Comments
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={hero.avatar}
              alt={hero.author}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-medium">{hero.author}</span>
            <span className="text-white/70">{hero.date}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
