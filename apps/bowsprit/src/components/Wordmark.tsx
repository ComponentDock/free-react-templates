import { SITE_NAME } from '../lib/site'

/**
 * The bar's wordmark: the app's own name in white, 32px at weight 800, uppercase
 * with a wide 0.2em tracking, 48px of line-height and 5px of its own padding — one
 * link back to the top of the page, never a two-tone mark.
 */
export function Wordmark() {
  return (
    <h1 className="m-0 leading-none">
      <a
        href="#top"
        className="mr-4 inline-block py-[5px] text-[32px] leading-[48px] font-extrabold tracking-[0.2em] whitespace-nowrap text-white uppercase transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {SITE_NAME}
      </a>
    </h1>
  )
}
