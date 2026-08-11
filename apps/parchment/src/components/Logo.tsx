import { siteName } from '../data'

/* Wordmark (reference `div.header__logo`, an image of "wordsmith." set in an
   italic serif) — recreated as text in Libre Baskerville italic. */
export function Logo() {
  return (
    <a
      href="#"
      className="font-heading text-[2.4rem] leading-none text-ink italic transition-colors hover:text-ink/70"
      aria-label={`${siteName} home`}
    >
      {siteName}
    </a>
  )
}
