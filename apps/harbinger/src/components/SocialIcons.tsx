interface SocialLink {
  name: string
  href: string
  color: string
  svg: string
}

const socials: SocialLink[] = [
  {
    name: 'Facebook',
    href: '#',
    color: 'text-social-facebook',
    svg: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    name: 'Twitter',
    href: '#',
    color: 'text-social-twitter',
    svg: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    name: 'Google',
    href: '#',
    color: 'text-social-google',
    svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.13 3.35-1.32 3.73-1.33.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z',
  },
  {
    name: 'Instagram',
    href: '#',
    color: 'text-social-instagram',
    svg: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-7a.75.75 0 110-1.5.75.75 0 010 1.5z',
  },
  {
    name: 'Pinterest',
    href: '#',
    color: 'text-social-pinterest',
    svg: 'M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.03-.78.01-1.72.2-2.57l1.4-5.94s-.36-.71-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.77-2.25 3.77-5.49 0-2.87-2.06-4.87-5-4.87-3.41 0-5.41 2.56-5.41 5.2 0 1.03.4 2.13.89 2.73.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.41.16-1.52-.71-2.47-2.94-2.47-4.73 0-3.85 2.8-7.39 8.07-7.39 4.24 0 7.53 3.02 7.53 7.05 0 4.21-2.65 7.59-6.33 7.59-1.24 0-2.4-.64-2.8-1.4l-.76 2.91c-.27 1.06-1.01 2.39-1.51 3.2.53.16 1.1.25 1.69.25 5.52 0 10-4.48 10-10S17.52 2 12 2z',
  },
]

export function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      {socials.map(({ name, href, color, svg }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-pink hover:text-brand-pink ${color}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={svg} />
          </svg>
        </a>
      ))}
    </div>
  )
}
