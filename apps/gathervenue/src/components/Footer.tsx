import { Globe, MessageSquare, Send, Share2 } from 'lucide-react'

const SOCIALS = [
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: MessageSquare, label: 'Twitter', href: '#' },
  { icon: Send, label: 'Instagram', href: '#' },
  { icon: Share2, label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <a href="https://www.componentdock.com/" className="mb-4 inline-block text-xl font-bold">
          <span className="text-navy">Component</span>
          <span className="text-brand"> Dock</span>
        </a>
        <div className="mb-4 flex justify-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
        <p className="text-xs text-gray-400">
          More templates at{' '}
          <a href="https://www.componentdock.com/" className="text-brand hover:underline">
            Component Dock
          </a>
        </p>
        <p className="mt-2 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} GatherVenue. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
