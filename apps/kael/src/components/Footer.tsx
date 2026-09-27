import { Heart } from 'lucide-react'

const SOCIALS = [
  { name: 'Facebook', href: '#', label: 'Facebook' },
  { name: 'Twitter', href: '#', label: 'Twitter' },
  { name: 'Dribbble', href: '#', label: 'Dribbble' },
  { name: 'Behance', href: '#', label: 'Behance' },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Logo */}
        <a
          href="#"
          className="mb-4 inline-block text-3xl font-bold text-primary-400"
          aria-label="Kael home"
        >
          Kael
        </a>

        {/* Follow heading */}
        <h3 className="mb-6 font-display text-lg font-medium">Follow Me</h3>

        {/* Social links */}
        <div className="mb-8 flex justify-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary-500"
            >
              <span className="sr-only">{s.name}</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright + Component Dock */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <Heart className="inline h-3 w-3 text-red-400" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 underline transition hover:text-primary-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
