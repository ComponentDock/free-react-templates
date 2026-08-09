/* Inline brand icons — lucide-react removed brand icons, so these are small
   original SVG marks (Spotify circles, Apple logo, Google Podcasts mark,
   YouTube play button) used in the hero platform pills. */

interface BrandIconProps {
  name: 'spotify' | 'apple' | 'google' | 'youtube'
  className?: string
}

const paths: Record<BrandIconProps['name'], React.ReactNode> = {
  spotify: (
    <>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M6.9 14.6c2.9 1.9 7.7 1.7 10.5 0 .4-.2.9-.1 1.1.3.2.4.1.9-.3 1.1-3.2 2-8.6 2.2-12 .1-.4-.2-.6-.7-.4-1.1.2-.3.7-.5 1.1-.4zM6.4 11.6c3.6-2.2 9.4-2.4 12.9-.4.4.2.6.7.4 1.1-.2.4-.7.6-1.1.4-3-1.7-8.2-1.6-11.4.3-.4.2-.9.1-1.1-.3-.2-.4-.1-.9.3-1.1zm-.3-3.1c4.3-2.5 11.2-2.7 15.3-.5.4.3.6.8.3 1.2-.3.4-.8.6-1.2.3-3.7-2-10-1.8-13.8.4-.4.2-.9.1-1.2-.3-.2-.4-.1-.9.3-1.1z"
        fill="#fff"
      />
    </>
  ),
  apple: (
    <path
      d="M16.4 12.9c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.5zm-2.2-6.5c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.7-.9 2.7 1 .1 1.9-.5 2.5-1.3z"
      fill="currentColor"
    />
  ),
  google: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="4" fill="currentColor" />
      <path d="M10.5 8.5v7l6-3.5z" fill="#fff" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
      <path d="M10 9.5v5l4.5-2.5z" fill="#fff" />
    </>
  ),
}

export function BrandIcon({ name, className = 'h-4 w-4' }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} focusable="false">
      {paths[name]}
    </svg>
  )
}
