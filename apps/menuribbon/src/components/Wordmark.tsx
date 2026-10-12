import { SITE_NAME } from '../lib/site'

/**
 * The header's single wordmark: 32px, uppercase, weight 900 and accent blue, at
 * the far left of the bar. It sits at `#007bff` at every scroll position — the
 * reference turns it accent only while pinned, which leaves it white on a white
 * bar until then; the tint here is constant so the mark is legible throughout.
 */
export function Wordmark() {
  return (
    <h1 className="mb-0">
      <a
        href="#top"
        className="inline-block text-[2rem] leading-none font-black uppercase text-accent transition-colors duration-300 hover:text-accent-shade focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {SITE_NAME}
      </a>
    </h1>
  )
}
