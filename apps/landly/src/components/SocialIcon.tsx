import type { ReactElement } from 'react'
import { socials } from '../data'

type SocialLabel = (typeof socials)[number]['label']

const glyphs: Record<SocialLabel, ReactElement> = {
  Facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.2-1.5 1.5-1.5h1.7V4.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.7H8v3.1h2.8v8h2.7z" />
  ),
  Twitter: (
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.9-2.6 1.1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.2 4-.6.2-1.2.2-1.8.1a4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.6-6.3 11.6-11.7v-.5c.8-.6 1.5-1.3 2.1-2.4z" />
  ),
  Instagram: (
    <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8zm4 2.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zM17.4 6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
  ),
}

export function SocialIcon({ label }: { label: SocialLabel }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[15px] w-[15px]"
      aria-hidden="true"
      focusable="false"
    >
      {glyphs[label]}
    </svg>
  )
}
