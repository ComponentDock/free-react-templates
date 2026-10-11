import { useState, type FormEvent } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Building2, MapPin, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { HERO } from '../data/content'

const CHIPS: readonly { label: string; Icon: LucideIcon }[] = [
  { label: 'Restaurant', Icon: UtensilsCrossed },
  { label: 'Hotel', Icon: Building2 },
  { label: 'Places', Icon: MapPin },
  { label: 'Shopping', Icon: ShoppingBag },
]

export function Hero() {
  const [keyword, setKeyword] = useState('')
  const [where, setWhere] = useState<string>(HERO.whereDefault)
  const [status, setStatus] = useState<string | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const term = keyword.trim()
    setStatus(term ? `Showing results for ${term} in ${where}` : null)
  }

  return (
    <section id="home" className="hero-wrap flex min-h-[90vh] items-center pt-32 pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-tight text-white sm:text-5xl lg:text-[60px]">
            <strong className="font-bold">{HERO.titleTop}</strong>
            <br />
            <span className="font-extralight">{HERO.titleBottom}</span>
          </h1>
          <p className="mt-5 text-xl font-light text-white/80">{HERO.subtitle}</p>

          <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="hero-keyword" className="sr-only">
              {HERO.searchLabel}
            </label>
            <input
              id="hero-keyword"
              name="keyword"
              placeholder={HERO.searchPlaceholder}
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="search-field sm:flex-1"
            />
            <label htmlFor="hero-where" className="sr-only">
              {HERO.whereLabel}
            </label>
            <select
              id="hero-where"
              name="where"
              value={where}
              onChange={(event) => setWhere(event.target.value)}
              className="search-field sm:w-56"
            >
              {HERO.whereOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button type="submit" className="search-submit">
              {HERO.submit}
            </button>
          </form>

          {status ? (
            <p role="status" className="mt-4 text-sm text-white">
              {status}
            </p>
          ) : null}

          <p className="mt-8 text-white">{HERO.browseLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {CHIPS.map(({ label, Icon }) => (
              <li key={label}>
                <a href="#listings" className="browse-chip">
                  <Icon aria-hidden="true" className="h-5 w-5 text-black" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
