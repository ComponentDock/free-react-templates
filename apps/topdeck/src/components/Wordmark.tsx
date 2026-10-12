import { SITE_NAME } from '../lib/site'

/**
 * The nav row's own wordmark: the app's name in white, 20px, uppercase and bold,
 * optically lifted 7px the way the source does it, and linked back to the top of
 * the page. It is the only type on the row besides the seven labels.
 */
export function Wordmark() {
  return (
    <h1 className="relative -top-[7px] m-0 leading-none">
      <a
        href="#top"
        className="inline-block text-[20px] font-bold tracking-[0.08em] text-white uppercase transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {SITE_NAME}
      </a>
    </h1>
  )
}
