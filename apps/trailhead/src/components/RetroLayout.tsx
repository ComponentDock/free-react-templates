import { cn } from '@free-react-templates/ui'
import { Chip } from './Chip'
import { imgUrl, retroCards, retroLabel } from '../data'

export function RetroLayout() {
  const tall = retroCards.filter((card) => card.tall)
  const medium = retroCards.filter((card) => !card.tall)

  return (
    <section aria-label={retroLabel} className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 md:grid-cols-12">
        {/* Left: one tall card */}
        <div className="md:col-span-5">
          {tall.map((card) => (
            <a
              key={card.seed}
              href="#home"
              className="group relative block h-full overflow-hidden rounded"
            >
              <img
                src={imgUrl(card.seed, 600, 800)}
                alt=""
                className="h-[400px] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Chip label={card.chipLabel} category={card.category} />
                <h3 className="mt-2 font-serif text-[26px] font-bold leading-snug text-white transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-1 text-[13px] text-white/50">{card.date}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Right: one medium card + two small side by side */}
        <div className="space-y-6 md:col-span-7">
          {medium.slice(0, 1).map((card) => (
            <a
              key={card.seed}
              href="#home"
              className="group relative block overflow-hidden rounded"
            >
              <img
                src={imgUrl(card.seed, 800, 300)}
                alt=""
                className="h-[300px] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Chip label={card.chipLabel} category={card.category} />
                <h3 className="mt-2 font-serif text-lg font-bold text-white transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-1 text-[13px] text-white/50">{card.date}</p>
              </div>
            </a>
          ))}
          <div className={cn('grid gap-6 sm:grid-cols-2')}>
            {medium.slice(1).map((card) => (
              <a
                key={card.seed}
                href="#home"
                className="group relative block overflow-hidden rounded"
              >
                <img
                  src={imgUrl(card.seed, 400, 300)}
                  alt=""
                  className="h-[220px] w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <Chip label={card.chipLabel} category={card.category} />
                  <h3 className="mt-2 font-serif text-base font-bold text-white transition-colors group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/50">{card.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
