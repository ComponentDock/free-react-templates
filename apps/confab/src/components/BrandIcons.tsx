/* Brand icons as inline SVGs — lucide-react removed brand icons, so these
   are small hand-drawn paths kept in the brand-agnostic stroke style. */

interface IconProps {
  className?: string
}

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true as const,
}

export function FacebookIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3V11H8.5v3h2.8v7h2.2Z" />
    </svg>
  )
}

export function TwitterIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M17.8 3h2.7l-6 6.8L21.5 21h-5.5l-4.3-5.6L6.7 21H4l6.4-7.3L3.5 3H9l3.9 5.1L17.8 3Zm-1 16.2h1.5L7.9 4.7H6.3l10.5 14.5Z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M12 3.8c2.7 0 3 0 4.1.1 1 0 1.6.2 2 .4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3 1 .4 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.6-.4 2-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1 .3-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.2-.4-.3-1-.4-2-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.6.4-2 .2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.3 2-.4 1.1-.1 1.4-.1 4.1-.1ZM12 5.6c-2.6 0-2.9 0-3.9.1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.4.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.4 1 .6.3.1.8.3 1.7.3 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.4-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.4-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-3.9-.1Zm0 2.4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 6.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm5.1-6.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" />
    </svg>
  )
}

export function YoutubeIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  )
}
