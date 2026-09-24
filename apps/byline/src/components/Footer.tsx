import { BrandIcon } from './BrandIcon'

const socialLinks = [
  { label: 'Facebook', name: 'facebook' as const },
  { label: 'Twitter', name: 'twitter' as const },
  { label: 'LinkedIn', name: 'linkedin' as const },
  { label: 'Instagram', name: 'instagram' as const },
  { label: 'YouTube', name: 'youtube' as const },
] as const

export function Footer() {
  return (
    <footer className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* Social links row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-between">
          {socialLinks.map(({ label, name }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-brand"
            >
              <BrandIcon name={name} className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
