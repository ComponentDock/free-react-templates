import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { ACTIVE_PILL_INDEX, CATEGORY_PILLS, HERO, HOME_ID } from '../lib/site'

/**
 * The cover: a full-height photo under a top-heavy navy wash, the headline and subtext, a white
 * two-field search bar with a blue submit, and the translucent category pills with the recorded one
 * pressed. Submitting the form is cancelled client-side — the design's own script posts nothing.
 */
function cancelSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Hero() {
  const [activePill, setActivePill] = useState(ACTIVE_PILL_INDEX)

  return (
    <section
      id={HOME_ID}
      className="relative flex min-h-[956px] items-center justify-center overflow-hidden bg-navy"
    >
      <img
        src={HERO.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,32,61,0.65)_0%,rgba(27,34,60,0.75)_46%,rgba(27,34,60,0.15)_100%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 pt-32 text-center">
        <h1 className="font-display text-[60px] font-semibold leading-tight text-white">
          {HERO.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-[22px] font-light leading-relaxed text-white">
          {HERO.subtext}
        </p>

        <form
          onSubmit={cancelSubmit}
          className="mx-auto mb-8 mt-10 flex max-w-3xl flex-col gap-2 rounded-xl bg-white p-2 shadow-lg sm:flex-row sm:items-center"
        >
          <div className="relative flex-1">
            <label
              htmlFor="hero-what"
              className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 font-display text-base font-medium text-navy"
            >
              {HERO.whatLabel}
            </label>
            <input
              id="hero-what"
              type="text"
              placeholder={HERO.whatPlaceholder}
              className="h-[60px] w-full rounded-md bg-transparent pl-[88px] pr-4 text-ink outline-none placeholder:text-muted/60"
            />
          </div>
          <div className="relative flex-1 border-t border-section sm:border-l sm:border-t-0">
            <label
              htmlFor="hero-where"
              className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 font-display text-base font-medium text-navy"
            >
              {HERO.whereLabel}
            </label>
            <input
              id="hero-where"
              type="text"
              placeholder={HERO.wherePlaceholder}
              className="h-[60px] w-full rounded-md bg-transparent pl-[88px] pr-4 text-ink outline-none placeholder:text-muted/60"
            />
          </div>
          <Button
            type="submit"
            className="h-[60px] shrink-0 rounded-md px-8 font-display text-base"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            {HERO.search}
          </Button>
        </form>

        <ul role="list" className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORY_PILLS.map((label, index) => (
            <li key={label}>
              <button
                type="button"
                aria-pressed={activePill === index}
                onClick={() => setActivePill(index)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-base transition-colors',
                  activePill === index
                    ? 'bg-deep text-white'
                    : 'bg-white/25 text-white hover:bg-white/40',
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
