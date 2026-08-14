import { ButtonLink } from '@free-react-templates/ui'
import { heroBanner } from '../data'

/** Photo banner (431px tall per the reference) with the green "FRUIT FRESH"
 *  eyebrow, a two-line headline, a support line and a SHOP NOW button. */
export function HeroBanner() {
  return (
    <section aria-label="Featured banner" className="bg-white">
      <div
        className="mx-auto flex min-h-[431px] max-w-[1140px] items-center bg-cover bg-center px-4 md:pl-[75px]"
        style={{ backgroundImage: `url(${heroBanner.image})` }}
      >
        <div className="max-w-md bg-white/85 p-6 md:bg-transparent md:p-0">
          <span className="text-sm font-extrabold uppercase tracking-[2px] text-brand">
            {heroBanner.eyebrow}
          </span>
          <h2 className="mt-3 text-5xl font-bold leading-tight text-ink">
            {heroBanner.headline}
            <br />
            {heroBanner.headlineAccent}
          </h2>
          <p className="mt-4 text-base text-muted">{heroBanner.support}</p>
          <ButtonLink
            href="#shop"
            onClick={(event) => event.preventDefault()}
            className="mt-8 rounded-none bg-brand px-7 py-3 text-sm font-bold uppercase tracking-[2px] hover:bg-primary-700"
          >
            {heroBanner.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
