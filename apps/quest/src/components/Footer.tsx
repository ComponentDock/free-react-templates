import { Heart } from 'lucide-react'

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Behance', href: '#' },
  { name: 'Dribbble', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
] as const

export function Footer() {
  return (
    <footer className="bg-brand-dark py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-brand inline" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-hover font-semibold transition-colors"
          >
            Component Dock
          </a>
        </p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold hover:bg-brand transition-colors"
            >
              {link.name[0]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
