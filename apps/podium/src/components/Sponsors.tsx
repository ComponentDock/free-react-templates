import { Handshake } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SponsorTier {
  label: string
  heightClass: string
  names: string[]
  link?: boolean
}

const tiers: SponsorTier[] = [
  {
    label: 'Platinum Sponsors',
    heightClass: 'h-20',
    names: ['TechCorp', 'CloudScale'],
  },
  {
    label: 'Gold Sponsors',
    heightClass: 'h-16',
    names: ['DataFlow', 'SecureNet', 'DevTools Inc'],
  },
  {
    label: 'Silver Sponsors',
    heightClass: 'h-16',
    names: ['StartupHub', 'CodeCraft', 'InnovateLab'],
  },
  {
    label: 'Community Partners',
    heightClass: 'h-12',
    names: ['TechMedia', 'DevCommunity'],
    link: true,
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Our Partners
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Proudly{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Sponsored By
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We are grateful to the organizations that make this conference possible.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {tiers.map((tier) => (
            <div key={tier.label}>
              <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {tier.label}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {tier.names.map((name) => (
                  <div
                    key={name}
                    className={cn(
                      'group flex items-center justify-center rounded-xl border border-gray-200 bg-white px-10 py-4 transition-all hover:border-primary-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800',
                      tier.heightClass,
                    )}
                  >
                    <span
                      className={cn(
                        'text-lg font-bold text-gray-400 transition-colors group-hover:text-primary-500',
                        tier.link ? 'text-sm font-semibold' : 'text-xl',
                      )}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900 lg:flex-row">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Become a Sponsor</h3>
            <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-400">
              Showcase your brand to 3,000+ tech professionals with premium placement, speaking
              opportunities, and exclusive networking.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#sponsors"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-shadow hover:shadow-xl"
            >
              <Handshake className="h-4 w-4" aria-hidden="true" />
              Download Sponsorship Kit
            </a>
            <a
              href="#sponsors"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400 dark:hover:text-primary-400"
            >
              Contact Sponsorship Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
