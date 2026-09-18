import { cn } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

export interface HeroProps {
  className?: string
}

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.27.25-1.94.25H0v-14.2h6.938zm-.36 5.98c.63 0 1.14-.15 1.53-.46.39-.31.58-.76.58-1.37 0-.35-.06-.64-.19-.87-.13-.23-.3-.42-.52-.56-.22-.14-.47-.24-.75-.3-.28-.06-.56-.09-.84-.09H3.56v3.65h2.99zm.13 6.27c.32 0 .63-.03.94-.1.31-.07.58-.18.82-.33.24-.15.43-.35.59-.6.16-.25.24-.57.24-.96 0-.76-.22-1.32-.67-1.67-.45-.35-1.03-.53-1.74-.53H3.56v4.2h3.15zM15.06 4.69h5.88v1.26h-5.88V4.69zM19.68 7.2c.74 0 1.37.12 1.89.38.52.25.93.62 1.24 1.1.3.48.45 1.07.45 1.77 0 .5-.1.93-.3 1.29-.2.36-.48.64-.84.84-.36.2-.78.33-1.26.38v.03c.62.1 1.1.3 1.47.59.37.3.56.71.56 1.23 0 .76-.24 1.36-.73 1.8-.49.44-1.17.66-2.05.66-1.13 0-2.05-.36-2.77-1.08-.72-.72-1.08-1.74-1.08-3.06h1.56c.02.35.1.64.24.88.14.24.33.42.57.54.24.12.51.18.82.18.32 0 .58-.06.79-.19.21-.13.31-.34.31-.62 0-.28-.1-.5-.31-.67-.21-.17-.48-.25-.82-.25H17.4v-1.04h2.28c.27 0 .49-.06.66-.17.17-.11.25-.28.25-.5 0-.32-.11-.56-.34-.71-.23-.15-.53-.23-.9-.23-.14 0-.28.02-.43.05-.15.04-.28.09-.4.16-.12.07-.21.16-.29.27-.08.11-.12.24-.14.39h-1.56c-.02-.94.23-1.73.75-2.36.52-.63 1.27-.94 2.24-.94z" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
      </svg>
    ),
  },
] as const

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-screen items-center justify-center overflow-hidden',
        className,
      )}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/astra-hero/3000/2000)' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          We provide creative
          <br />
          solutions to turn your
          <br />
          ideas into digital reality
        </h1>

        <div className="mt-10">
          <a
            href="#about"
            className="inline-block rounded bg-primary-400 px-8 py-3 font-sans text-sm font-semibold text-white transition-all hover:bg-primary-500"
          >
            More About Us
          </a>
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
            aria-label="Play video"
          >
            <Play size={16} />
            <span>Play Video</span>
          </a>
        </div>

        <div className="mt-16">
          <a
            href="#about"
            className="font-sans text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white"
          >
            Scroll
          </a>
        </div>
      </div>

      {/* Social sidebar */}
      <nav className="absolute bottom-8 left-6 z-10 hidden md:block" aria-label="Social links">
        <ul className="flex flex-col gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-400"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
