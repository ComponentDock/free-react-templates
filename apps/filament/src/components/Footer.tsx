import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

const columns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'PowerBox', 'Live Monitoring', 'Managed Service'],
  },
  {
    title: 'Company',
    links: ['Jobs', 'Branding', 'Warehero', 'Analytics'],
  },
  {
    title: 'Support',
    links: ['Pricing', 'Documentation', 'Guides', 'API Status'],
  },
  {
    title: 'Projects',
    links: ['Brand Identity', 'Web Design', 'UI/UX', 'App Development'],
  },
]

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-paper-dark pt-20 pb-8', className)}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Main footer grid */}
        <div className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Navigation columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-ink-light transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quick Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-ink-light">(012) 345 678 901</li>
              <li>
                <a
                  href="mailto:info@filament.com"
                  className="text-sm text-ink-light transition-colors hover:text-brand"
                >
                  info@filament.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="mb-8 flex justify-center gap-4">
          {['Facebook', 'Twitter', 'Dribbble', 'Behance'].map((platform) => (
            <a
              key={platform}
              href={`#${platform.toLowerCase()}`}
              aria-label={platform}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-social-bg text-ink-light transition-colors hover:text-white"
            >
              <span className="text-xs font-medium">{platform[0]}</span>
            </a>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-ink-light">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
