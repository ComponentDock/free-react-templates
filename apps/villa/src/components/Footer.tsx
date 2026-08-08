import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

const columns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Company',
    links: ['Home', 'Main Feature', 'Offered Services', 'Latest Portfolio'],
  },
  {
    title: 'Support',
    links: ['Works & Builders', 'Works & Wordpress', 'Works & Templates'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-paper py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-mist dark:text-white/60">
                {column.links.map((label) => (
                  <li key={label}>
                    <a href="#home" className="transition-colors hover:text-brand-dark">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
              Quick Contact
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mist dark:text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
            <p className="mt-4 text-sm font-semibold text-ink dark:text-white">
              +00 012 6325 98 6542
            </p>
            <p className="text-sm text-brand-dark">support@colorlib.com</p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-white/20 dark:text-white/70"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-8 text-center text-xs text-mist dark:border-white/10 dark:text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Villa. All rights reserved.</p>
          <p>recreation of ColorLib Layal</p>
        </div>
      </div>
    </footer>
  )
}
