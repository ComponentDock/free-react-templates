import { SITE_NAME } from '../lib/site'

/** The header's single white 24px wordmark, at the far left of the container. */
export function Wordmark() {
  return (
    <h1 className="mb-0">
      <a
        href="#top"
        className="inline-block text-[24px] font-medium text-white transition-colors duration-300 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {SITE_NAME}
      </a>
    </h1>
  )
}
