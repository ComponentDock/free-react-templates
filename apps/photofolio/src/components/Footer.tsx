import { BrandIcon } from './BrandIcon'

const socialLinks = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
] as const

export function Footer() {
  return (
    <footer className="bg-ink px-10 py-[19px]">
      <div className="mx-auto flex max-w-[1780px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-[11px] font-medium text-white">
          © 2026 Photofolio. All rights reserved. · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            Component Dock
          </a>
        </p>
        <div className="flex items-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#home"
              aria-label={social.label}
              className="ml-10 text-white first:ml-0 transition-opacity hover:opacity-70"
            >
              <BrandIcon name={social.name} className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
