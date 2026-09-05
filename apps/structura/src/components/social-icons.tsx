import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  )
}

export function GooglePlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.1 4.9c-2.4 0-4.5 1.1-5.8 2.8l2.1 2.1c.8-1.1 2.1-1.8 3.7-1.8 1.5 0 2.8.7 3.7 1.8l2.1-2.1c-1.3-1.7-3.4-2.8-5.8-2.8zM7.2 12c0 1.1.4 2.1 1.1 2.9l2.1-2.1c-.3-.4-.5-.9-.5-1.4 0-.5.2-1 .5-1.4L8.3 7.9C7.5 8.7 7.2 9.8 7.2 11zm8.3-3.4l-2.1 2.1c.3.4.5.9.5 1.4 0 .5-.2 1-.5 1.4l2.1 2.1c.8-.8 1.1-1.8 1.1-2.9 0-1.1-.4-2.1-1.1-2.9v-.2zM12 16.5c-2.5 0-4.5 2-4.5 4.5h2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5h2c0-2.5-2-4.5-4.5-4.5z" />
    </svg>
  )
}
