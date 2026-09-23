import { Globe, MessageCircle, Share2, Link2 } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Register', href: '#' },
  { label: 'Jobs', href: '#' },
  { label: 'Blog', href: '#' },
]

const categoryLinks = [
  { label: 'Design & Creative', href: '#' },
  { label: 'Marketing', href: '#' },
  { label: 'Administration', href: '#' },
  { label: 'Customer Service', href: '#' },
]

const socialLinks = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Share2, href: '#', label: 'Instagram' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Logo + Social */}
        <div className="space-y-4">
          <a href="#" className="text-2xl font-bold text-brand">
            JobNest
          </a>
          <p className="text-sm text-gray-400">
            Find your dream job from thousands of listings. Your next career move starts here.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Col 2: Company */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Category */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Category</h3>
          <ul className="space-y-2">
            {categoryLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
          <p className="mb-4 text-sm text-gray-400">
            Subscribe to get the latest job listings and career tips.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="bg-brand text-white hover:bg-brand-hover"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © 2026 All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
