import type { ChannelName } from '../lib/site'

/**
 * The four brand glyphs as inline SVGs — lucide-react ships no brand icons at all, so the
 * alternative to a path data set would be four empty rings, which is exactly what the design
 * itself renders (it ships no icon font either, and its circles measure zero by zero). Everything
 * the page draws for a channel lives here; nothing else in the app knows what a Facebook mark
 * looks like.
 */
const paths: Record<ChannelName, string> = {
  facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  dribbble:
    'M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0zm9.833 5.999a10.16 10.16 0 0 1 1.905 5.66c-.44-.09-4.05-.826-7.702-.352a53.6 53.6 0 0 0-.79-1.72c4.098-1.673 5.913-4.055 6.588-3.588zm-1.352-1.494c-.55.79-2.226 2.907-6.094 4.383C12.63 5.33 10.7 2.24 10.42 1.815a10.1 10.1 0 0 1 10.06 2.69zM8.65 2.386c.264.36 2.156 3.49 3.945 6.744-4.982 1.325-9.34 1.301-9.808 1.293a10.2 10.2 0 0 1 5.863-8.037zM2.03 12.006v-.31c.45.01 5.57.074 10.79-1.49.295.573.575 1.157.83 1.74-.135.04-.275.08-.41.123-5.42 1.75-8.3 6.533-8.545 6.945A10.14 10.14 0 0 1 2.03 12.006zM12 22.14a10.1 10.1 0 0 1-6.24-2.146c.194-.4 2.32-4.5 8.24-6.57l.07-.024c1.47 3.81 2.075 7.01 2.233 8.03A10.05 10.05 0 0 1 12 22.14zm5.425-1.63c-.106-.633-.652-3.66-1.964-7.36 3.21-.51 6.02.325 6.71.55a10.16 10.16 0 0 1-4.746 6.81z',
}

export interface BrandIconProps {
  /** Which of the four channels this mark stands for. */
  name: ChannelName
  className: string
}

/**
 * One channel's mark: currentColor so a circle's hover fill can tint it, and hidden from the
 * accessibility tree because the circle around it already carries the channel's own name.
 */
export function BrandIcon({ name, className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={paths[name]} />
    </svg>
  )
}
