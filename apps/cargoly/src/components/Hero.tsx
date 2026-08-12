import { ArrowRight } from 'lucide-react'
import {
  COUNTRY_CODES,
  HERO_HEADLINE,
  HERO_IMAGE,
  HERO_PHONE_PLACEHOLDER,
  HERO_SUBLINE,
  PICKUP_CARD_LABEL,
  PICKUP_CARD_TITLE,
} from '../data'

/**
 * Hero — full-bleed dark truck photo (source `section.banner_part`, 835px):
 * white headline with a yellow accent word, phone input + country-code
 * select + yellow arrow button, and the floating yellow "Get Pick Up Here"
 * card at the bottom-right.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[835px] items-center overflow-hidden" aria-label="Hero">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 lg:px-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            {HERO_HEADLINE.map((part) => (
              <span key={part.text} className={part.accent ? 'text-accent' : undefined}>
                {part.text}{' '}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-lg text-white/80">{HERO_SUBLINE}</p>
          <form
            className="mt-8 flex max-w-xl items-center rounded-[4px] bg-white p-1.5"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Phone callback"
          >
            <label htmlFor="hero-country" className="sr-only">
              Country code
            </label>
            <select
              id="hero-country"
              defaultValue="+33"
              className="h-12 border-r border-line bg-transparent px-3 text-sm font-medium text-ink outline-none"
            >
              {COUNTRY_CODES.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <label htmlFor="hero-phone" className="sr-only">
              Phone number
            </label>
            <input
              id="hero-phone"
              type="tel"
              placeholder={HERO_PHONE_PLACEHOLDER}
              className="h-12 flex-1 bg-transparent px-4 text-sm text-ink outline-none placeholder:text-mist"
            />
            <button
              type="submit"
              aria-label="Submit phone number"
              className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white transition-colors hover:bg-brand"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <a
        href="#"
        aria-label={PICKUP_CARD_TITLE}
        className="absolute bottom-10 right-6 z-10 flex items-center gap-6 bg-accent px-7 py-6 shadow-xl transition-colors hover:bg-brand lg:right-16"
      >
        <span className="text-left">
          <span className="block text-xs font-semibold uppercase tracking-wide text-white/90">
            {PICKUP_CARD_LABEL}
          </span>
          <span className="block font-display text-xl font-bold uppercase text-white">
            {PICKUP_CARD_TITLE}
          </span>
        </span>
        <ArrowRight className="h-6 w-6 text-white" aria-hidden="true" />
      </a>
    </section>
  )
}
