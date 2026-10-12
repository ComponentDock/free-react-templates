import type { SocialName } from '../lib/site'

/**
 * The social row's brand marks. lucide-react ships no brand glyphs, so each one is a small inline
 * path — the platform name travels as the link's accessible name instead.
 */
const PATHS: Record<SocialName, string> = {
  facebook:
    'M13.5 21v-7h2.4l.4-2.9h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.9h2.5V21z',
  x: 'M17.5 4h2.9l-6.3 7.2L21.5 20h-5.6l-4.4-5.7L6.4 20H3.5l6.7-7.7L3 4h5.7l4 5.3zm-1 14.3h1.6L7.4 5.6H5.7z',
  instagram:
    'M12 7.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm0 6.8a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4zM17.3 7.5a1 1 0 11-2 0 1 1 0 012 0zM12 4.6c2.4 0 2.7 0 3.7.1 1 0 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3.9.4 1.9 0 1 .1 1.3.1 3.7s0 2.7-.1 3.7c0 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-.9.3-1.9.4-1 0-1.3.1-3.7.1s-2.7 0-3.7-.1c-1 0-1.5-.2-1.9-.4a3.3 3.3 0 01-1.2-.8 3.3 3.3 0 01-.8-1.2c-.2-.4-.3-.9-.4-1.9 0-1-.1-1.3-.1-3.7s0-2.7.1-3.7c0-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2.9-.3 1.9-.4 1 0 1.3-.1 3.7-.1z',
  pinterest:
    'M12 4a8 8 0 00-2.9 15.5c-.1-.7-.2-1.7 0-2.4l1-4.2s-.3-.5-.3-1.3c0-1.2.7-2.1 1.6-2.1.7 0 1.1.6 1.1 1.2 0 .8-.5 1.9-.7 3-.2.9.4 1.6 1.3 1.6 1.6 0 2.7-2 2.7-4.4 0-1.8-1.3-3.2-3.6-3.2-2.7 0-4.3 2-4.3 4.1 0 .8.3 1.7.7 2.1.1.1.1.2.1.3l-.3 1.1c0 .2-.2.3-.4.2-1.1-.5-1.8-2.2-1.8-3.6 0-2.9 2.1-5.6 6.1-5.6 3.2 0 5.7 2.3 5.7 5.3 0 3.2-2 5.7-4.7 5.7-.9 0-1.8-.5-2.1-1l-.6 2.2c-.2.8-.8 1.9-1.2 2.5A8 8 0 1012 4z',
}

export function SocialIcon({ name, className }: { name: SocialName; className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={PATHS[name]} />
    </svg>
  )
}
