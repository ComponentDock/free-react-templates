import { SITE_NAME } from '../lib/site'

/**
 * The page's single h1: the wordmark at 16px, uppercase, bold and white over the
 * coral band — no accent glyph and no trailing punctuation, and one colour for
 * the whole page because the header is never pinned.
 */
export function Wordmark() {
  return (
    <h1 className="mb-0 text-[16px] leading-normal font-bold">
      <a
        href="#home"
        aria-label={`${SITE_NAME}, back to the top`}
        className="inline-block text-white uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {SITE_NAME}
      </a>
    </h1>
  )
}
