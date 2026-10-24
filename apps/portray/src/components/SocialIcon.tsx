const paths: Record<string, string> = {
  Instagram:
    'M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.9-7.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM21 8.4a5.4 5.4 0 0 0-1.5-3.9A5.4 5.4 0 0 0 15.6 3C14.1 2.9 9.9 2.9 8.4 3a5.4 5.4 0 0 0-3.9 1.5A5.4 5.4 0 0 0 3 8.4C2.9 9.9 2.9 14.1 3 15.6a5.4 5.4 0 0 0 1.5 3.9A5.4 5.4 0 0 0 8.4 21c1.5.1 5.7.1 7.2 0a5.4 5.4 0 0 0 3.9-1.5 5.4 5.4 0 0 0 1.5-3.9c.1-1.5.1-5.7 0-7.2Zm-1.9 8.8a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.2.1-5.3-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.2.4-5.3A3 3 0 0 1 6.8 4.9c1.2-.5 4-.4 5.3-.4s4.2-.1 5.3.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.2-.4 5.3Z',
  Twitter:
    'M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.4 11.4 0 0 1 3.9 4.7a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.2a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1Z',
  Facebook:
    'M13.5 21v-7.5h2.5l.4-2.9h-2.9V8.7c0-.8.2-1.4 1.4-1.4h1.6V4.7A20 20 0 0 0 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.6H8v2.9h2.3V21h3.2Z',
}

export interface SocialIconProps {
  network: string
  className?: string
}

export function SocialIcon({ network, className }: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      data-network={network}
    >
      <path d={paths[network]} />
    </svg>
  )
}

export const socialNetworks = Object.keys(paths)
