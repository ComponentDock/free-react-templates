import { BRAND } from '../data'

/* Logo recreated from the source template's logo section: centered text
   on a near-black background. */

export function Logo() {
  return (
    <div className="bg-logo-bg py-11">
      <div className="mx-auto max-w-7xl text-center">
        <a href="#home" className="inline-block" aria-label="Fragstorm home">
          <span className="font-heading text-4xl font-bold uppercase tracking-widest text-text-primary">
            {BRAND}
          </span>
        </a>
      </div>
    </div>
  )
}
