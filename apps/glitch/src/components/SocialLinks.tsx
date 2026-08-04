const socials = [
  {
    name: 'GitHub',
    label: 'GitHub',
    href: 'https://github.com',
    path: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z',
  },
  {
    name: 'X',
    label: 'X (Twitter)',
    href: 'https://x.com',
    path: 'M17.53 3H20.5l-6.5 7.43L21.75 21h-6l-4.7-6.14L5.6 21H2.63l6.96-7.95L2.25 3h6.15l4.25 5.62L17.53 3Zm-1.05 16.2h1.66L7.62 4.71H5.84L16.48 19.2Z',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8.09h4.56V23H.22V8.09ZM8.16 8.09h4.37v2.03h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.25h-4.55v-7.31c0-1.74-.03-3.99-2.43-3.99-2.43 0-2.8 1.9-2.8 3.86V23H8.16V8.09Z',
  },
] as const

export function SocialLinks() {
  return (
    <ul className="flex gap-4">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-glow transition-colors hover:bg-glow hover:text-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-glow dark:hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d={social.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
